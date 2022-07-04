---
sidebar_position: 3
---

# Code Style Guide

Here, with this guide, we set the basis for our developers coding style.  
Please read carefully and adhere to the principles below.

## General

- **Indentation Style:** Tabs
- **Tab Size:** 4 spaces



## Technology Selection


## Methodology
- Soft Delete
Whenever is possible, implement soft delete on the models, meaning, records are marked with `deleted` status rather than actually deleting the record. Prefarably, a `deleted_at` column should be part of the database tables.
