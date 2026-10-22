# 💗 Our Little Album

A cute scrapbook-style photo site for the two of you, ready for free hosting on GitHub Pages.

## 1. Make it yours

Open **`config.js`** and change:
- your names
- the date you got together (for the "days together" counter)
- the tagline and footer message

## 2. Add your photos

1. Drop your pictures (`.jpg`, `.png`, `.webp`…) into the **`photos`** folder.
2. In `config.js`, list each one in `PHOTOS`:
   ```js
   { file: "beach.jpg", caption: "that beach day 🌊", date: "Jul 2024" },
   ```
3. Delete the `example-*.svg` files and their lines when you're done.

Tip: file names are case-sensitive on GitHub (`Beach.JPG` ≠ `beach.jpg`). Phone photos can be large — resizing to ~1600px wide keeps the site fast.

## 3. Put it on GitHub

**Easiest way (no command line):**
1. Go to github.com → **New repository** → name it (e.g. `our-album`) → Create.
2. Click **"uploading an existing file"**, drag in *everything inside* this folder (including the `photos` folder), and click **Commit changes**.
3. Go to **Settings → Pages**, under "Branch" pick **main** and **/ (root)**, then **Save**.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/our-album/` 🎉

**Or with git:**
```bash
git init
git add .
git commit -m "our album 💗"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/our-album.git
git push -u origin main
```
Then turn on Pages as in step 3 above.

## Adding more photos later
Upload the new image into `photos/` on GitHub, edit `config.js` (click the file → pencil icon) to add a line, commit — the site updates in a minute or two.

> Note: a GitHub Pages site is public to anyone with the link. Only add photos you're both happy to share!
