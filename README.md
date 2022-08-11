# Gatsby source strapi plugin menus

This plugin sources the [strapi-plugin-menus](https://market.strapi.io/plugins/strapi-plugin-menus)

# How to use

`gatsby-config.js`

```
module.exports = {
  plugins: [
        {
            resolve: "gatsby-source-strapi-plugin-menus",
            options: {
            apiURL: strapiConfig.apiURL,
            token: strapiConfig.accessToken,
            },
        },
    ],
}
```
