import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import KeeperHeaderCellDisplayDesktop from "../components/keeper-header-cell-display-desktop"
import KeeperCellDisplayDesktop from "../components/keeper-cell-display-desktop"
import KeeperHeaderCellDisplayTablet from "../components/keeper-header-cell-display-tablet"
import KeeperCellDisplayTablet from "../components/keeper-cell-display-tablet"

const TeamKeepers = props => {
  const playerList = props.data.allAirtable.edges
  return (
    <Layout>
      <h2>{props.pageContext.teamName}</h2>
      <table>
        <thead>
          <tr>
            <th colspan="2">Player</th>
            <KeeperHeaderCellDisplayTablet>
              Acquired
            </KeeperHeaderCellDisplayTablet>
            <KeeperHeaderCellDisplayDesktop>
              12-13 Salary
            </KeeperHeaderCellDisplayDesktop>
            <KeeperHeaderCellDisplayDesktop>
              13-14 Salary
            </KeeperHeaderCellDisplayDesktop>
            <KeeperHeaderCellDisplayDesktop>
              14-15 Salary
            </KeeperHeaderCellDisplayDesktop>
            <KeeperHeaderCellDisplayDesktop>
              15-16 Salary
            </KeeperHeaderCellDisplayDesktop>
            <KeeperHeaderCellDisplayDesktop>
              16-17 Salary
            </KeeperHeaderCellDisplayDesktop>
            <KeeperHeaderCellDisplayDesktop>
              17-18 Salary
            </KeeperHeaderCellDisplayDesktop>
            <KeeperHeaderCellDisplayTablet>
              18-19 Salary
            </KeeperHeaderCellDisplayTablet>
            <KeeperHeaderCellDisplayTablet>FYOT</KeeperHeaderCellDisplayTablet>
            <th>CTK</th>
          </tr>
        </thead>
        <tbody>
          {playerList.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{player.node.data.Player_Name__Team___Position_}</td>
              <KeeperCellDisplayTablet>
                {player.node.data.acquired}
              </KeeperCellDisplayTablet>
              <KeeperCellDisplayDesktop>
                {!player.node.data._2012_2013_Salary
                  ? "-"
                  : `$${player.node.data._2012_2013_Salary}`}
              </KeeperCellDisplayDesktop>
              <KeeperCellDisplayDesktop>
                {!player.node.data._2013_2014_Salary
                  ? "-"
                  : `$${player.node.data._2013_2014_Salary}`}
              </KeeperCellDisplayDesktop>
              <KeeperCellDisplayDesktop>
                {!player.node.data._2014_2015_Salary
                  ? "-"
                  : `$${player.node.data._2014_2015_Salary}`}
              </KeeperCellDisplayDesktop>
              <KeeperCellDisplayDesktop>
                {!player.node.data._2015_2016_Salary
                  ? "-"
                  : `$${player.node.data._2015_2016_Salary}`}
              </KeeperCellDisplayDesktop>
              <KeeperCellDisplayDesktop>
                {!player.node.data._2016_2017_Salary
                  ? "-"
                  : `$${player.node.data._2016_2017_Salary}`}
              </KeeperCellDisplayDesktop>
              <KeeperCellDisplayDesktop>
                {!player.node.data._2017_2018_Salary
                  ? "-"
                  : `$${player.node.data._2017_2018_Salary}`}
              </KeeperCellDisplayDesktop>
              <KeeperCellDisplayTablet>
                {!player.node.data._2018_2019_Salary
                  ? "-"
                  : `$${player.node.data._2018_2019_Salary}`}
              </KeeperCellDisplayTablet>
              <KeeperCellDisplayTablet>
                {player.node.data.FYOT}
              </KeeperCellDisplayTablet>
              <td>${player.node.data.CTK}</td>
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
      sort: { fields: data___CTK, order: DESC }
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
