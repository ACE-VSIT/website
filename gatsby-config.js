require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `ACE-VIPS`,
    description: `ACE - Association of Computer Enthusiasts is the CSI Student Branch of Vivekananda Institute of Professional Studies, Pitampura. We are a group of talented and curious technology enthusiasts who are specialised in different fields of technology, namely quizzing, programming, web development, digital imaging, and video editing.`,
    author: `@ace`,
    siteUrl: `https://vipsace.org`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#EEE`,
        display: `minimal-ui`,
        icon: `src/images/ACELogoLight.svg`,
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        schemas: {
          homepage: require("./src/schemas/Homepage.json"),
          layout: require("./src/schemas/Layout.json"),
          members: require("./src/schemas/Members.json"),
          projects: require("./src/schemas/Projects.json"),
          achievements: require("./src/schemas/Achievements.json"),
        },
        // customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        // linkResolver: doc => linkResolver(doc),
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
