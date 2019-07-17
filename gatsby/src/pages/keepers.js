import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const Keepers = ({ data }) => {
  // grab all the teams from each keeper
  const allKeepersTeamsArray = data.allAirtable.edges.map(
    edge => edge.node.data.team
  )
  // use Set to remove duplicates from allKeepersTeamsArray
  const eachTeamSet = new Set(allKeepersTeamsArray)
  // turn Set back into an array
  const eachTeamArray = Array.from(eachTeamSet)
  // loop over eachTeamArray
  const teamsKeepers = eachTeamArray.map(team => {
    // return an array where each team is an array full of keepers
    return data.allAirtable.edges.filter(player => {
      // put keepers into their respective team's arrays
      return player.node.data.team === team
    })
  })
  return (
    <Layout>
      <div>
        <h2>Keepers</h2>
        {teamsKeepers.map((teamKeepersSection, index) => (
          <section key={index}>
            <h3>{teamKeepersSection[0].node.data.team}</h3>
            <table>
              <thead>
                <tr>
                  <th>Player name (TEAM - POS)</th>
                </tr>
              </thead>
              <tbody>
                {teamKeepersSection.map((keeper, index) => (
                  <tr key={index}>
                    <td>{keeper.node.data.Player_Name__Team___Position_}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
