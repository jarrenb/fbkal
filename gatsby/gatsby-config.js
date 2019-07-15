module.exports = {
  siteMetadata: {
    title: `FBKAL`,
    description: `a site for FBKAL`,
    author: `@jarrenb`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `fbkal`,
        short_name: `fbkal`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // below is airtable info for gatsby-source-airtable
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyO8SssyduM50AlX`, // may instead specify via env, see below
        tables: [
          {
            baseId: `apprTfFEvOaNEFI5i`,
            tableName: `keepers`,
            tableView: `Keepers`,
          },
          {
            baseId: `apprTfFEvOaNEFI5i`,
            tableName: `teams`,
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
