Place image files you download from Unsplash/Pexels here with these exact filenames so the site loads them automatically:

- hero.jpg (recommended 1600x900 or 1200x800)
- fries1.jpg (square, e.g., 800x800)
- fries2.jpg (square, e.g., 800x800)
- store.jpg (landscape, e.g., 1200x800)

Recommended workflow:
1. Download hi-res images (verify license).
2. Put originals in `public/images/original/` (optional).
3. Export optimized WebP/AVIF into `public/images/` using a tool like `sharp` or an online converter.
4. Run the dev server: `cd funkey-fries-web && npm run dev` and verify images render.

Notes:
- Next.js `next/image` will serve optimized formats when available. Use the `.jpg` names above as the canonical src.
- If you prefer PNG/SVG, keep the same filenames and extensions in `public/images/` and update `app/page.tsx` if necessary.
