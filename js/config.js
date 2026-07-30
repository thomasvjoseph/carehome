/**
 * Anugraha Care Home — central site configuration.
 *
 * Edit the values below to update contact details, address and image
 * paths across the ENTIRE website. Nothing else in the codebase needs
 * to change. Every field marked with [ ] is a placeholder and must be
 * replaced with real, verified information before the site goes live.
 */
window.ANUGRAHA_CONFIG = {
  orgName: "Anugraha Care Home",
  tagline: "A caring place to call home.",

  // ---- Contact details -----------------------------------------------
  // ⚠ TEMPORARY DEMO VALUES — not real. Filled in only so the site does
  // not look empty during development. Replace every field below with
  // Anugraha Care Home's real, verified details before going live.
  // Use ONLY the official office landline/mobile. Do not add WhatsApp
  // numbers or personal mobile numbers anywhere on the site.
  officePhoneDisplay: "+91 484 271 5678", // TEMP demo value — replace
  officePhoneDial: "+914842715678", // TEMP demo value — replace
  email: "info@anugrahacarehome.in", // TEMP demo value — replace

  addressLine1: "Near St. Mary's Church, Vazhakulam Road", // TEMP demo value — replace
  addressLine2: "Muvattupuzha", // TEMP demo value — replace
  district: "Ernakulam", // TEMP demo value — replace
  state: "Kerala",
  country: "India",
  pincode: "686661", // TEMP demo value — replace

  enquiryHours: "Monday – Saturday, 9:00 AM – 6:00 PM", // TEMP demo value — replace

  // Paste a real Google Maps embed/share URL once the location is confirmed.
  googleMapsUrl: "",
  googleMapsEmbedUrl: "",

  // TEMP demo value — replace once the real founding year is confirmed.
  yearEstablished: "2014",

  // Social media — only add a URL once the account is confirmed as genuine.
  // Leave blank to hide the icon entirely (handled in main.js).
  social: {
    facebook: "",
    instagram: "",
    youtube: ""
  },

  // ---- Images ----------------------------------------------------------
  // ⚠ TEMPORARY STOCK PHOTOS (Unsplash, free-to-use license) — these are
  // NOT real photographs of Anugraha Care Home. They are here only so the
  // site doesn't look empty during development/design review. Replace
  // every entry with a real photograph before the site goes live — see
  // images/README.md. To use a real photo, point `src` at a local file,
  // e.g. "images/hero.jpg" — once that file exists locally it takes
  // priority automatically over any broken/missing remote URL.
  images: {
    hero: { src: "https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1200&q=75", alt: "TEMP stock photo — residents relaxing together (replace with real photo of Anugraha Care Home)" },
    exterior: { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=75", alt: "TEMP stock photo — building exterior (replace with real photo)" },
    entrance: { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=75", alt: "TEMP stock photo — entrance (replace with real photo)" },
    rooms: { src: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1200&q=75", alt: "TEMP stock photo — resident room (replace with real photo)" },
    commonArea: { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=75", alt: "TEMP stock photo — common living area (replace with real photo)" },
    dining: { src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=75", alt: "TEMP stock photo — dining area (replace with real photo)" },
    food: { src: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=75", alt: "TEMP stock photo — a meal (replace with real photo)" },
    garden: { src: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=1200&q=75", alt: "TEMP stock photo — garden (replace with real photo)" },
    outdoor: { src: "https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?auto=format&fit=crop&w=1200&q=75", alt: "TEMP stock photo — outdoor walking area (replace with real photo)" },
    activities: { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=75", alt: "TEMP stock photo — an activity (replace with real photo)" },
    prayer: { src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=75", alt: "TEMP stock photo — quiet space (replace with real photo)" },
    familyVisit: { src: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1200&q=75", alt: "TEMP stock photo — family visit (replace with real photo)" },
    staffCare: { src: "https://images.unsplash.com/photo-1576765608866-5b51046452be?auto=format&fit=crop&w=1200&q=75", alt: "TEMP stock photo — staff assisting a resident (replace with real photo)" },
    surrounding: { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=75", alt: "TEMP stock photo — surrounding area (replace with real photo)" }
  }
};
