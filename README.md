# node/05 · Group Portfolio

Unified portfolio for Kirby Ramilo, Mel Fredrick Sablan, Justine Carl Fabian, Althea Marie Laurente and Krizten Antoinette Lapuz.

## Files

| File | What it holds |
| --- | --- |
| `index.html` | Page structure: boot screen, nav, home view, member view container |
| `css/style.css` | All styling (design tokens at the top in `:root`) |
| `js/data.js` | **Team content.** Edit this to change names, roles, stack, focus, projects, contacts |
| `js/app.js` | Rendering, routing (`#kirby`, `#mel`, ...), terminal, animations |
| `images/` | Put member photos here |

## Editing content

Open `js/data.js`. Each member follows the same structure:
introduction (`roles`, `intro`, `signature`, `card`, `highlights`), `stack`, `focus`, `projects`, `contact`.

- Items with `todo: true` render as dashed "to be added" placeholders. Fill them in and delete the flag.
- Photo: set `photo: "images/kirby.jpg"`. Empty shows initials.
- Accent color per member: `color`.

## Run locally

Open `index.html` in a browser, or serve the folder:

```
npx serve .
```

## Deploy

Push to GitHub, import the repo in Vercel. No build step.
