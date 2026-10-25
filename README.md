# AURA WALL — Premium Interactive Art E-Commerce

Production-ready React + Vite website for AURA WALL, a Moroccan premium plexiglass wall-art studio.

## Included
- Light, iOS-inspired gallery UI
- Responsive desktop / tablet / mobile layouts
- Mobile category covers stacked vertically
- Central product data in `src/data.js`
- 173 supplied artwork assets from the provided ZIP
- Anime subcategories: Naruto, One Piece, Dragon Ball Z, More Anime
- Gaming and Movies & Series collections
- Personalized Art service experience
- Search across title, franchise, category, subcategory and tags
- Artwork detail pages with related works
- WhatsApp CTAs with pre-filled artwork messages
- English / Arabic language switch with RTL support
- Accessible semantic controls and reduced-motion support
- SEO-friendly slugs and metadata foundations

## Run locally

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Add artwork

Open `src/data.js` and add a new object to the `products` array:

```js
{
  id: "anime-naruto-101",
  title: "Your Artwork Name",
  category: "anime",
  subcategory: "naruto",
  franchise: "Naruto",
  character: "Character Name",
  image: "/assets/anime/naruto/your-file.jpg",
  description: "Short description.",
  tags: ["naruto", "character", "plexiglass", "wall art"],
  slug: "your-artwork-name"
}
```

Put the image inside `public/assets`.

## GitHub

Upload the entire project folder to your repository. Any Vite-compatible host can build it with `npm run build`.

## WhatsApp

The site uses the AURA WALL number `+212 627 025 271` and generates pre-filled messages for artwork enquiries.
