---
sidebar_position: 1
---

# Technology Stack

Below are brand names, peogramming languages, infrastructures we have worked on.

## Development

- PHP
  - Codeignter
  - Laravel / Filament

- Java

- ASP.Net
  - C#

- Javascript
  - VueJS
  - NuxtJS
  - ReactJS
  - ElectronJS
  - ExpressJs
  - Strapi

- HTML
  - CSS / SCSS
  - Tailwind
  - Bootstrap

- Python

- Firebase
- MySql
- MS-Sql
- Docker

---

## AWS

### RDS, Allow Remote Access

1. Create a MySQL instance on AWS RDS as a regular MySQL, not Aurora (yet)
2. Name your db cluster, ensure not to chose easy configurations to enable public access
3. Make the password generation automatic, make sure you capture it after clicking `create`
4. once your DB is ready, to enable remote access, click on the db instance to enter the page
5. click security group for the active VPC
6. on the bottom of screen, look for `inbount rules`
7. edit the rules
8. add a new rule for mysql/aurora and make sure the source is set to any.

Thats it
