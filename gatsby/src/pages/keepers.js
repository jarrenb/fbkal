import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import KeepersTeamTable from "../components/keepers-team-table"

const Keepers = ({ data }) => {
  // grab all the teams from each keeper
  const allKeepersTeamsArray = data.allAirtable.edges.map(
    edge => edge.node.data.team
  )
  // use Set to remove duplicates from allKeepersTeamsArray
  const eachTeamSet = new Set(allKeepersTeamsArray)
  // turn Set back into an array
  const eachTeamArray = Array.from(eachTeamSet)
  return (
    <Layout>
      <div>
        <h2>Keepers</h2>
        {eachTeamArray.map(team => (
          <section>
            <h3>{team}</h3>
          </section>
        ))}
      </div>
    </Layout>
  )
}

export default Keepers

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "keepers" } }) {
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
