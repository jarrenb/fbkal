import React from "react"

import Layout from "../components/layout"

const TeamKeepers = props => {
  const playerList = props.data.allAirtable.edges
  return (
    <Layout>
      <h2>{props.pageContext.teamName}</h2>
      <table>
        {playerList.map(player => (
          <tr>
            <td>{player.node.data.Player_Name__Team___Position_}</td>
          </tr>
        ))}
      </table>
    </Layout>
  )
}

export default TeamKeepers

export const query = graphql`
  query teamKeeperQuery($teamName: String) {
    allAirtable(
      filter: { table: { eq: "keepers" }, data: { team: { eq: $teamName } } }
    ) {
      edges {
        node {
          data {
            Player_Name__Team___Position_
          }
        }
      }
    }
  }
`
