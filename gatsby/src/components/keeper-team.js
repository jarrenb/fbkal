import React from "react"

const KeeperTeam = props => {
  console.log(props.teamData)
  return (
    <div>
      <h1>{props.teamData.allAirtable.edges[0].node.data.team}</h1>
      <table>
        <tr>
          <th>Player</th>
        </tr>
        {props.teamData.allAirtable.edges.map(({ node }, index) => (
          <tr key={index}>
            <td>{node.data.Player_Name__Team___Position_}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default KeeperTeam
