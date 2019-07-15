import React from "react"
import Layout from "../components/layout"

const TeamKeepers = props => {
  const playerList = props.data.allAirtable.edges
  return (
    <Layout>
      <h2>{props.pageContext.teamName}</h2>
      <table>
        <thead>
          <tr>
            <th>Player (Team - Pos)</th>
            <th>Acquired</th>
            <th>2012-2013 Salary</th>
            <th>2013-2014 Salary</th>
            <th>2014-2015 Salary</th>
            <th>2015-2016 Salary</th>
            <th>2016-2017 Salary</th>
            <th>2017-2018 Salary</th>
            <th>2018-2019 Salary</th>
            <th>FYOT</th>
            <th>CTK</th>
          </tr>
        </thead>
        <tbody>
          {playerList.map((player, index) => (
            <tr key={index}>
              <td>{player.node.data.Player_Name__Team___Position_}</td>
              <td>{player.node.data.acquired}</td>
              <td>{player.node.data._2012_2013_Salary}</td>
              <td>{player.node.data._2013_2014_Salary}</td>
              <td>{player.node.data._2014_2015_Salary}</td>
              <td>{player.node.data._2015_2016_Salary}</td>
              <td>{player.node.data._2016_2017_Salary}</td>
              <td>{player.node.data._2017_2018_Salary}</td>
              <td>{player.node.data._2018_2019_Salary}</td>
              <td>{player.node.data.FYOT}</td>
              <td>{player.node.data.CTK}</td>
            </tr>
          ))}
        </tbody>
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
            acquired
            _2012_2013_Salary
            _2013_2014_Salary
            _2014_2015_Salary
            _2015_2016_Salary
            _2016_2017_Salary
            _2017_2018_Salary
            _2018_2019_Salary
            FYOT
            CTK
          }
        }
      }
    }
  }
`
