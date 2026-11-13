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

## Theme controls

Two buttons sit in the nav, left of `>_`:

- **Accent palette** (rainbow dot): drag the color gradient, pick a swatch or type a hex. It recolors the whole site, including member pages. `reset` restores each member's own color. Saved in `localStorage` (`n05-accent`).
- **Dark / light toggle** (moon/sun): a code-rain wave (digits, letters, symbols) expands from the button while the page switches theme. Saved in `localStorage` (`n05-theme`). Honors `prefers-reduced-motion` (instant switch).

Light theme tokens live in `:root[data-theme="light"]` in `css/style.css`. Wave and palette logic is in `js/app.js`.

## Run locally

Open `index.html` in a browser, or serve the folder:

```
npx serve .
```

## Deploy

Push to GitHub, import the repo in Vercel. No build step.
