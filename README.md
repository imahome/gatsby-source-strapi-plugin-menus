# Gatsby source strapi plugin menus

This plugin sources the [strapi-plugin-menus](https://market.strapi.io/plugins/strapi-plugin-menus)

# Install

`npm`

```
npm install gatsby-source-strapi-plugin-menus
```

`yarn`

```
yarn add gatsby-source-strapi-plugin-menus
```

# How to use

`gatsby-config.js`

```
module.exports = {
  plugins: [
        {
            resolve: "gatsby-source-strapi-plugin-menus",
            options: {
            apiURL: "",
            token: process.env.accessToken,
            },
        },
    ],
}
```
