---
sidebar_position: 5
---

# Website Optimization

Regardless of your intent, weather it be for SEO purposes, for enhancing user experience, or simply to do things right the first time. Try to apply the following concepts where necessary and applicable

## Pre-fetch

## Picture Element

Use `<picture>` element instead of `<img>` element to display your pictures, you can even use it to replace css `background-image` property.
Using picture tag enables you to provide multiple images resolutions and settings for one image, a version for portrait screens, version for landscape, version for desktop, version for mobile, version for browsers that support `.webp` format (some Safaris don't) and browsers that don't support it.

This will hugely impact page load time.

## Lazy loading

Use `<img load="lazy" ...` to lazy load images that are off-screen to increase speed of initial page load. Images that are off-screen will be loaded on scroll. You can apply the same concept with components, iframes, and resources as necessary.


## More for later