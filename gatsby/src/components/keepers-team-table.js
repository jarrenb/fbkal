import React from "react"
import { StaticQuery, graphql } from "gatsby"

function filterPlayerData(playerDataArray) {
  return (
    <div>
      <h3>{playerDataArray[0].node.data.team}</h3>
      <table>
        <thead>
          <tr>
            <th>Player Name (TEAM - POS)</th>
          </tr>
        </thead>
        <tbody>
          {playerDataArray.map(player => (
            <tr>
              <td>{player.node.data.Player_Name__Team___Position_}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const KeepersTeamTable = props => (
  <StaticQuery
    query={graphql`
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
    `}
    render={({ allAirtable }) =>
      filterPlayerData(
        allAirtable.edges.filter(
          playerDataArray => playerDataArray.node.data.team === props.teamName
        )
      )
    }
  />
)

export default KeepersTeamTable
