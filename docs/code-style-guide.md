---
sidebar_position: 4
---

# Code Style Guide

Here, with this guide, we set the basis for our developers coding style.  
Please read carefully and adhere to the principles below.

## General

- **Indentation Style:** Tabs
- **Tab Size:** 4 spaces

## Projects Content

Each project (specifically web-based) should follow certain directory structure. To avoid confusions, use the below naming conventions and structure where possible.

```bash
--- Project
--- --- assets /
--- --- --- images /
--- --- --- --- logo / (project logo and all its variants)
--- --- --- fonts /
--- --- --- css (including scss)
--- --- --- files (pdfs / profiles / brouchores ...etc.)
--- --- --- videos /
--- --- sitemap.xml (or compressed version)
--- --- humans.txt
--- --- robots.txt
--- --- favico.ico
```

## Technology Selection

## Methodology

### Soft Delete

Whenever is possible, implement soft delete on the models, meaning, records are marked with `deleted` status rather than actually deleting the record. Prefarably, a `deleted_at` column should be part of the database tables.

## images

Preferrably, all images shall be in `webp` format, the benifits in terms of page load time are huge while disadvantages is sacrificing a little Mac Users (out of date Safaris)

## Unnecessary new lines and spaces

in all programing languages that have braces
do this

```js
function subtract(number_1, number_2){
    return number_2 - number_1;
}
```

not this

```js
function subtract( number_1 , number_2 )
{
    return number_2 - number_1;
}
```

use `async/await` instead of `.then().then().then().catch().finally()`

## Light-mode / Dark-mode Favicons

## Website Performance/Speed Score
