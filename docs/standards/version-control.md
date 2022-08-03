---
sidebar_position: 2
---
# Version Control

6 Degrees, employees, and projects utilize version control `git` to maintain code and its history. This enable multiple employees collaborate on one project and
enables the reversal and tracking of code changes.

## Remote Platform

While version control does not require having a remote repository, all our code bases use [GitHub](https://www.github.com) as a platform of choice for maintaining code and collaboration.

## Structure

Code is maintained in organizational profiles. For each client, company or set of projects, an organization name should be identified, and a GitHub organization shall be created. All code bases related to that organization or project shall be created and maintained inside the organization profile.

A dev team shall be created to include dev team members and that team should have control over the organization repos. 

## Naming Convention

Repos names should follow one of the below 3 naming conventions

1. `language`\_`framework`\_`project_name`\_`* optional suffics`
   **ex.** `py_flask_hex_converter_service`
   py => Python
   flask => flask framework for python web server
   hex_converter => project name
   service => suffix, as this repo is for a microservice.  
    <br />
2. `url_of_website`
   **ex.** `www.6degrees.com.sa`
   this repo will contain the source code, and a GitHub action that will auto deploy into `gh-pages` branch.
   <br />
3. `package_name`
   **ex.** swarmapp-api
   a simple name for an npm package.

## Repos Metadata

1. **Title**
   Same as repo name, no need to explain.
   <br />
2. **Url**
   if the repo is for a website, or has a live demo, or a page describing it, the url property should be populated
   <br />
3. **Description**
   Breif description of the content of the repo.
   <br />
4. **`readme.md` file**
   Readme file should always be populated with a revised meaningful title, a longer description, license of choice, credits given to owners of source code utilized in the repo, screenshot of the project outpout if possible.

## GitHub Actions

When dealing with static website creation through code, such as when using `docusaurous` or `nuxtjs`, a `GitHub Action` shall be created to automate the deployemnt and files creation for that repo into a `gh-pages` branch that will be linked to the *url* for that page or service.

## Branching Stratgey

**KISS** (Keep it simple stupid)
avoid branches unless for the below conditions:  

* the branch is for `github-pages` version to hold the build files, like this repo
* the branch is to reserve an old major version of the project. *i.e. You are upgrading to `version 2`, make a branch and name it `version 1` to hold the old version*
  
Goal is to avoid *merge conflicts resolution nightmare*

## Current Organizations

1. [6 Degrees Technologies](https://github.com/6degrees)
2. [Promotion Efficiency](https://github.com/PromotionEfficiency)
3. [Efficiency Center](https://github.com/EfficiencyS)
4. [Shace](https://github.com/Shace-co)
5. [Zahma O La](https://github.com/zahmaola)
6. [Mo3ayadah](https://github.com/mo3aydah)
7. [Deets.Pro](https://github.com/deets-pro)
8. [Burooj Efficiency](https://github.com/Burooj-pro)
