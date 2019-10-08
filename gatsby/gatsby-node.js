/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const teamKeepersTemplate = path.resolve(`src/templates/team-keepers.js`)
  return graphql(`
    {
      allAirtable(filter: { table: { eq: "teams" } }) {
        edges {
          node {
            data {
              slug
              name
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allAirtable.edges.forEach(edge => {
      createPage({
        path: `/keepers/${edge.node.data.slug}`,
        component: teamKeepersTemplate,
        context: {
          teamName: edge.node.data.name,
          slug: `/keepers/${edge.node.data.slug}`,
        },
      })
    })
  })
}
