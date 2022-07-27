---
sidebar_position: 1
---

# Create an SSR Nuxt App with Bootstrap and Bootstrap icons

Need to follow these steps.

1. `npx create-nuxt-app app_name`
2. `npm i bootstrap@5.1.3 bootstrap-icons@1.8.1 sass@1.49.9 sass-loader@10.1.1`
3. create a `plugins/bootstrap.client.js` and add this to it `import bootsrtap from "bootstrap"`
4. create `assets/scss/main.scss` and ensure you have the below inside it at the top

    ```css
    /* to include fonts
    @import '_fonts.scss';
    */

    @import '~bootstrap/scss/bootstrap'; /* these are the important lines for this task */
    @import "bootstrap-icons/font/bootstrap-icons.css"; /* these are the important lines for this task */

    /* if you want to override
    @import '_mixins.scss';
    @import '_variables.scss';
    */

    ```

5. include the below in `nuxt.config.js`

  ```javascript
    css: [
      '~/assets/scss/main.scss'
    ],

    plugins: [
      {
        src: '~/plugins/bootstrap.client.js'
      },
    ],
  ```

and that's it. everything should work