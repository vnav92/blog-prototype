module.exports = {
  siteMetadata: {
    title: `Blog Prototype`,
    description: `My blog template, possibly will use it in the future`,
    author: `vnav92`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // TODO: Use it when will be need of manifest features
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`,
    //   }
    // }
  ]
}
