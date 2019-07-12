/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

// 12 July 2019: in the middle of working on this. check this url to see what i was attempting. trying to take the slug i get from airtable and turn it into a url at pages/keepers for the dynamically made team keeper page https://www.gatsbyjs.org/docs/node-apis/#createPages

exports.createPages = ({ graphql, actions }) => {
  return graphql(`
    {
      allAirtable(filter: { table: { eq: "teams" } }) {
        edges {
          node {
            data {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    console.log(JSON.stringify(result, null, 4))
  })
}
