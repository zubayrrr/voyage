const dotenv = require("dotenv");

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  siteMetadata: {
    title: `Shivesh Ojha`,
    description: `Portfolio, Blog site`,
    author: `@ShiveshOjha`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shivesh Ojha`,
        short_name: `Shivesh Ojha`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#333`,
        icon: `src/images/fev_icon.png`, // This path is relative to the root of the site.
      },
    }, // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`,
  ],
};
