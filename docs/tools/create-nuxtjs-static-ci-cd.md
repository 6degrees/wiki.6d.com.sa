---
sidebar_position: 1
---

# Create a Static Nuxt App with CI/CD on Github Pages

Need to follow these steps in your repo

1. Create an action with below code

  ```yaml
  name: deploy-nuxt

  on:
    push:
      branches: [main] # make sure this is your main branch name
    pull_request:
      branches: [main] # make sure this is your main branch name

    # Allows you to run this workflow manually from the Actions tab
    workflow_dispatch:

  # A workflow run is made up of one or more jobs that can run sequentially or in parallel
  jobs:
    publish:
      runs-on: ubuntu-latest
      steps:
        # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
        - name: Check out repo
          uses: actions/checkout@v2
        # Node is required for npm
        - name: Set up Node
          uses: actions/setup-node@v2
          with:
            node-version: "16.14"
        # Install and build NuxtJs website
        - name: Build NuxtJS website
          env:
            BASE_URL: "https://www.promoe.com.sa/" # set your base URL properly for links to work
          run: |
            npm install 
            npm run generate
        - name: Deploy to GitHub Pages
          if: success()
          uses: crazy-max/ghaction-github-pages@v2
          with:
            target_branch: gh-pages
            build_dir: dist
          env:
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}      
  ```
  
2. Once done, you can go to `settings` and enable GitHub Pages on your `gh-pages` branch.
3. Ensure base url is setup in your GitHub Pages settings as Custom Domain. if Custom, make sure to add a `CNAME` file in your `static` directory.
