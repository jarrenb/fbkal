import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const KeeperDataLastUpdated = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(
        filter: { table: { eq: "keepers" } }
        sort: { fields: data___modified, order: DESC }
        limit: 1
      ) {
        edges {
          node {
            data {
              modified
            }
          }
        }
      }
    }
  `)
  const lastUpdated = new Date(data.allAirtable.edges[0].node.data.modified)

  return (
    <div style={{ marginBottom: `1.5rem` }}>
      Updated: {lastUpdated.toDateString()}
    </div>
  )
}

export default KeeperDataLastUpdated
