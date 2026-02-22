# Dr. Shila Nourani — Portfolio

Static doctor portfolio site (vanilla HTML, CSS, JS). Ready for **GitHub Pages**.

## Structure

- **index.html** — Main page with hero and transparent navbar
- **services.html** — Services offered
- **about.html** — About the practice
- **address.html** — Address and contact (edit placeholder text)
- **css/style.css** — Shared styles
- **js/main.js** — Navbar scroll behavior and mobile menu

## Publish on GitHub Pages

1. Create a new repository (e.g. `shila-nourani` or `username.github.io`).
2. Push this folder to the repo.
3. In the repo: **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**.
5. Branch: **main** (or **master**), folder: **/ (root)**.
6. Save. The site will be at `https://<username>.github.io/<repo-name>/`.

If the repo is named `username.github.io`, the site will be at `https://username.github.io/`.

## Local preview

Open `index.html` in a browser, or run a simple server:

```bash
# Python
python3 -m http.server 8000

# Then open http://localhost:8000
```

## Customize

- **Address/contact:** Edit the placeholder text in `address.html` (address, phone, hours).
- **Copy:** Update services, about text, and hero text in the HTML files.
- **Name/title:** Search for “Dr. Shila Nourani” and “Family Medicine” and replace as needed.

No build step or dependencies; everything is static and vanilla.
