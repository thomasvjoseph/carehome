/**
 * Anugraha Care Home — shared site behaviour.
 * No frameworks, no build step. Reads window.ANUGRAHA_CONFIG (js/config.js)
 * so contact details and images can be updated from a single file.
 */
(function () {
  "use strict";

  var cfg = window.ANUGRAHA_CONFIG || {};

  document.addEventListener("DOMContentLoaded", function () {
    injectConfig();
    wireImages();
    wireMobileNav();
    wireForms();
    wireSocialLinks();
    var yearEl = document.getElementById("footer-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });

  /* ---- Inject contact / address details wherever referenced ---------- */
  function injectConfig() {
    document.querySelectorAll("[data-cfg]").forEach(function (el) {
      var key = el.getAttribute("data-cfg");
      var value = getByPath(cfg, key);
      if (value) el.textContent = value;
    });

    document.querySelectorAll("[data-cfg-tel]").forEach(function (el) {
      if (cfg.officePhoneDial) {
        el.setAttribute("href", "tel:" + cfg.officePhoneDial);
      } else {
        el.setAttribute("href", "tel:");
        el.setAttribute("aria-disabled", "true");
      }
    });

    document.querySelectorAll("[data-cfg-mailto]").forEach(function (el) {
      if (cfg.email && cfg.email.indexOf("[") === -1) {
        el.setAttribute("href", "mailto:" + cfg.email);
      }
    });

    document.querySelectorAll("[data-cfg-maps-href]").forEach(function (el) {
      if (cfg.googleMapsUrl) {
        el.setAttribute("href", cfg.googleMapsUrl);
      } else {
        el.setAttribute("aria-disabled", "true");
      }
    });
  }

  function getByPath(obj, path) {
    return path.split(".").reduce(function (acc, part) {
      return acc && acc[part] !== undefined ? acc[part] : "";
    }, obj);
  }

  /* ---- Images: load real photo if present, else show label ----------- */
  function wireImages() {
    document.querySelectorAll("[data-img]").forEach(function (frame) {
      var key = frame.getAttribute("data-img");
      var entry = cfg.images && cfg.images[key];
      var img = frame.querySelector("img");
      if (!entry || !img) return;

      img.alt = entry.alt || "";
      img.loading = frame.hasAttribute("data-eager") ? "eager" : "lazy";
      img.decoding = "async";
      img.addEventListener("error", function () {
        frame.classList.add("is-placeholder");
      }, { once: true });
      img.src = entry.src;
    });
  }

  /* ---- Mobile nav ------------------------------------------------------*/
  function wireMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".main-nav");
    var scrim = document.querySelector(".nav-scrim");
    if (!toggle || !nav) return;

    function close() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      if (scrim) scrim.classList.remove("is-open");
    }
    function open() {
      nav.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      if (scrim) scrim.classList.add("is-open");
    }

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.contains("is-open");
      isOpen ? close() : open();
    });
    if (scrim) scrim.addEventListener("click", close);
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", close);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  /* ---- Forms: UI-only, no backend wired up yet ------------------------ */
  function wireForms() {
    document.querySelectorAll("form[data-form]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!form.reportValidity()) return;

        var successEl = form.parentElement.querySelector(".form-success");
        form.hidden = true;
        if (successEl) {
          successEl.classList.add("is-visible");
          successEl.setAttribute("tabindex", "-1");
          successEl.focus();
        }
        // NOTE for developer: no backend is connected yet. To go live, send
        // the form data (new FormData(form)) to an email service, backend
        // API, or a form provider such as Netlify Forms / Formspree here.
      });
    });
  }

  function wireSocialLinks() {
    var wrap = document.querySelector("[data-social]");
    if (!wrap || !cfg.social) return;
    var any = false;
    Object.keys(cfg.social).forEach(function (key) {
      var link = wrap.querySelector('[data-social-' + key + ']');
      if (!link) return;
      if (cfg.social[key]) {
        link.setAttribute("href", cfg.social[key]);
        any = true;
      } else {
        link.remove();
      }
    });
    if (!any) wrap.remove();
  }
})();
