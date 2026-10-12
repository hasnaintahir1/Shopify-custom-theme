# Genjutsu Shopify Theme

**Genjutsu is a custom Shopify storefront theme built from scratch for a clean, responsive shopping experience.** It brings together reusable Liquid sections, JSON page templates, theme-editor settings, and JavaScript-powered cart interactions so the storefront can be previewed and customized in Shopify.

## What Is Included

- A **homepage** with a configurable hero section.
- A **store header** with desktop and mobile navigation, search, an optional customer-account link, and a cart entry point.
- **Announcement bar** and footer sections, including newsletter, menu, payment, and policy blocks.
- **Product pages** with an image gallery, variant selection, quantity controls, add-to-cart button, optional payment button, and related products.
- **Collection pages** with product grids, featured collections, and collection-list sections.
- A **cart page** and cart drawer for reviewing cart contents.
- Customer **login** and **registration** page templates.
- Reusable theme-editor blocks for text, images, buttons, and grouped content.
- Store-wide settings for the store name and heading/body fonts.

## Built From Scratch

This repository contains the theme's storefront structure and custom components: the shared layout, reusable sections and blocks, page templates, theme settings, and supporting JavaScript. Shopify provides the commerce platform and store data; the theme uses Shopify Liquid and theme JSON to present that data as a storefront.

## Requirements

- A Shopify store or development store.
- [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) installed and access to the store.

## Run the Theme Locally

1. Clone this repository and open its folder in a terminal.
2. Sign in to Shopify CLI when prompted.
3. Start a local theme preview:

   ```bash
   shopify theme dev --store your-store.myshopify.com
   ```

4. Open the preview URL printed by Shopify CLI.

Replace `your-store.myshopify.com` with your store's `.myshopify.com` domain. Shopify CLI synchronizes the theme with the store and provides a preview link.

## Publish the Theme

When you are ready to upload the theme to your store, run:

```bash
shopify theme push --store your-store.myshopify.com
```

Review the CLI prompts and select the appropriate theme destination before confirming. **Preview and verify the theme before publishing it to customers.**

## Customize in Shopify

Open **Online Store → Themes → Customize** in Shopify Admin to edit sections and their settings. Add products and collections in Shopify Admin, then select the relevant collection or content in the theme editor.

Before previewing, check that:

- Your store has products, product images, and collections to display.
- The **Main menu** is set up for the header and footer.
- Customer accounts are enabled if you want the account link to appear.
- Store details, announcement text, newsletter content, and other section settings suit your storefront.

## Project Structure

| Path | Purpose |
| --- | --- |
| `assets/` | Theme JavaScript for storefront and cart interactions. |
| `blocks/` | Reusable text, image, button, and group blocks. |
| `config/` | Theme editor settings schema and current settings data. |
| `layout/` | Shared storefront layout and global asset loading. |
| `sections/` | Header, footer, product, collection, cart, and other configurable sections. |
| `snippets/` | Reusable theme markup, including cart item content. |
| `templates/` | JSON templates for the homepage, products, collections, cart, and customer pages. |

## Technology

**Shopify Liquid**, **Shopify JSON templates**, **HTML**, **CSS**, and **JavaScript**.
