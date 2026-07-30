# Images

Drop real photographs into this folder using the exact file names below.
The site checks for each file automatically (see `js/config.js` /
`js/main.js`) — until a file exists, a labelled placeholder block is shown
instead of a broken image, so nothing looks broken while photos are missing.

| File name | Used for |
|---|---|
| `hero.jpg` | Homepage hero — residents together |
| `exterior.jpg` | Building exterior |
| `entrance.jpg` | Entrance |
| `rooms.jpg` | A resident's room |
| `common-area.jpg` | Common living area |
| `dining.jpg` | Dining area |
| `food.jpg` | A meal |
| `garden.jpg` | Garden |
| `outdoor.jpg` | Outdoor walking area |
| `activities.jpg` | Residents doing an activity |
| `prayer.jpg` | Quiet / prayer space |
| `family-visit.jpg` | A family visiting a resident |
| `staff-care.jpg` | Staff member assisting a resident |
| `surrounding.jpg` | Surrounding area near the home |

Recommended photos to collect first: building exterior, entrance, a
bedroom, common living area, dining area, garden, outdoor areas, staff
interacting with residents, food, activities, family visits, and the
surrounding area.

Use real, recent photographs of Anugraha Care Home only. Do not use stock
photography — it undermines the trust the website is trying to build.

To add a new image slot (not in the list above), add an entry to the
`images` object in `js/config.js` and reference it with
`data-img="yourKey"` on an `.img-frame` element in the HTML.
