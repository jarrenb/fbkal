import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import KeepersTeamTable from "../components/keepers-team-table"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h2>Keepers</h2>
        {data.allAirtable.edges.map(({ node }, index) => (
          <KeepersTeamTable key={index} teamName={node.data.name} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "teams" } }) {
      edges {
        node {
          data {
            name
          }
        }
      }
    }
  }
`
