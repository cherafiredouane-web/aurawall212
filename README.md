# AURA WALL — Website

A premium, light-themed, bilingual (English / Arabic) catalogue website for AURA WALL. Built with plain HTML, CSS and JavaScript so it can be hosted for free on GitHub Pages without a build command, server, database, API key or paid service.

## Included

- Responsive homepage with the supplied AURA WALL logo and horizontal category covers.
- Four primary destinations: Anime, Gaming, Movies & Series, and a distinct Personalized Art request experience.
- Anime collections for Naruto, One Piece, Dragon Ball Z and More Anime.
- 173 catalogue artwork records based on the supplied images, with product IDs, category metadata, titles, search tags and alt text.
- Live search across titles, categories and metadata.
- Product detail modal and product-specific WhatsApp inquiry links.
- Custom-art request form that composes a message for WhatsApp.
- English / Arabic interface switching with LTR / RTL layout and Alexandria as the Arabic font (with fallbacks).
- Responsive layout, lazy-loaded catalogue images, keyboard focus states and reduced-motion support.
- GitHub Actions workflow that publishes the static website to GitHub Pages on pushes to `main` or `master`.

## Publish it on GitHub Pages

1. Download and extract this project ZIP.
2. Open your AURA WALL GitHub repository. Upload **the contents of this folder** into the repository's root—not the outer folder itself. The root should contain `index.html`, `app.js`, `styles.css`, `assets/`, `data/` and `.github/`.
3. Commit the changes to `main` (or `master`). If GitHub asks whether to replace the old website files, use the new project files so the site and its assets stay in sync.
4. In the repository, open **Settings → Pages**. Under the build/deployment source, choose **GitHub Actions**.
5. Open the **Actions** tab. Wait for **Deploy AURA WALL to GitHub Pages** to finish successfully, then open the published URL shown by the workflow or under **Settings → Pages**.

After the first successful deployment, future pushes to `main` or `master` publish automatically. You do not need to run the site on your computer.

## Add or edit artwork

Open `data/products.json`. Every product has a stable `id`, `title`, `category`, `subcategory`, `image`, `alt`, `tags` and `featured` flag. Put new optimized artwork in `assets/artwork/`, then add its record to the JSON file. Keep image paths relative (for example, `assets/artwork/new-piece.jpg`) so the site works when hosted at `https://USERNAME.github.io/REPOSITORY/`.

If you change the WhatsApp contact, update `WHATSAPP_NUMBER` in `app.js` and the direct contact links in `index.html`.

## Notes

- This is a showcase-and-inquiry website, not a payment storefront. No product prices or checkout are implemented.
- The custom form opens WhatsApp with the visitor's request; it does not claim to be an automatic design editor.
- The website uses a relative asset/data structure for repository-name-safe GitHub Pages hosting.
- The artwork is drawn from the supplied archive. Some titles use visual descriptions where the exact character or scene was not identifiable with confidence.
