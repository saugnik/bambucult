# BambuCult catalogue website

A B2B catalogue with no prices and no checkout. Buyers browse, add products to an
enquiry list with rough quantities, and send that list to you on WhatsApp or by email.

Pages: `index.html` (home), `catalogue.html` (all products, or one category with `?c=`),
`product.html` (one product), `enquiry.html` (the buyer's list), `about.html`, `contact.html`.

Menu: Home · Bamboo Oral Products · Bamboo Craft · Bamboo Gifts · Bamboo Constructions ·
Bamboo Care · About · Contact.

Before going live, read **TO-CHECK.md**: it lists the product details your supplier needs to
confirm, and the contact details that are still placeholders.

## 1. Add your contact details

Open `assets/js/config.js` and replace the placeholder WhatsApp number, phone, email,
address and hours. Every page reads from this one file.

## 2. Products without a photo are hidden

A product only appears on the site once it has a photo. The other 31 are still in
`assets/js/products.js` but carry `hidden: true`, so nothing shows an empty picture frame.

To bring one back: save its photo into `images/products/` named after its code
(`BC-110.jpg`), then delete `hidden: true` from that product's line in `products.js`.
The product, the counts and the menus all update by themselves.

## 3. Photos

Product photos live in `images/products/` and are named by product code: `BC-103.jpg` is the
main photo for BC-103, and `BC-103-2.jpg` … `BC-103-6.jpg` are optional extra views.
`images/products/PHOTO-LIST.csv` lists every code and product name.

The current photos are free stock images from Pixabay (Pixabay Content License: free for
commercial use, no attribution required). They show similar products, not your exact stock,
so the site says photos are for illustration. `images/CREDITS.csv` records where each one came
from. When you have photos of your own products, save them over the old files with the same
names. Square `.jpg` photos of about 1200 × 1200 px work best.

## 4. Edit products

Everything about the products lives in `assets/js/products.js`: categories, names,
descriptions, specifications, the unit buyers order in, which items can be engraved
(`engrave: true`) and which appear on the home page (`featured: true`).

Products removed in the November 2026 restructure (jewellery, stationery, pet care, rakhis,
cutlery set, fertiliser spike) are kept in `_backup/` in case you want them back.

## 5. Logo

The logo files are in `brand/` (open `brand/index.html` to see them, the colours, sizes and
the four concepts that were considered). Use `brand/logo.svg` on light backgrounds,
`brand/logo-reversed.svg` on dark ones, and `brand/logo-1600.png` where an image file is needed
(WhatsApp profile, email signature, documents). `favicon.svg`, `favicon.ico` and
`apple-touch-icon.png` are the browser and phone icons.

## 6. Change the menu or footer

The header and footer are shared by all pages. Edit `_tools/layout.js` (menu) or
`_tools/logo.html` (logo), then run `node _tools/layout.js` to update every page.

## 7. Put it online

There is no server or database. Upload the folder to any static host: Netlify (drag and
drop the folder), Cloudflare Pages, GitHub Pages, or your existing hosting's file manager or
FTP. The `_backup` and `_tools` folders are not needed online.
