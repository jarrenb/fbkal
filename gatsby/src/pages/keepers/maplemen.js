import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import KeeperTeam from "../../components/keeper-team"

const Maplemen = ({ data }) => (
  <Layout>
    <KeeperTeam teamData={data} />
  </Layout>
)

export default Maplemen

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "keepers" }, data: { team: { eq: "Maplemen" } } }
    ) {
      edges {
        node {
          data {
            Player_Name__Team___Position_
            team
          }
        }
      }
    }
  }
`
