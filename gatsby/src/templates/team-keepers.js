import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import KeeperHeaderCellDisplayDesktop from "../components/keeper-header-cell-display-desktop"
import KeeperCellDisplayDesktop from "../components/keeper-cell-display-desktop"
import KeeperHeaderCellDisplayTablet from "../components/keeper-header-cell-display-tablet"
import KeeperCellDisplayTablet from "../components/keeper-cell-display-tablet"

const TeamKeepersPage = styled.section`
  h2 {
    margin-bottom: 0.5rem;
  }
`

const TeamKeepers = props => {
  const playerList = props.data.allAirtable.edges

  const breadcrumbs = [
    { to: "/", title: "FBKAL" },
    { to: "/keepers", title: "Keepers" },
    // { to: props.pageContext.slug, title: props.pageContext.teamName },
  ]
  return (
    <Layout breadcrumbs={breadcrumbs}>
      <TeamKeepersPage>
        <h2>{props.pageContext.teamName}</h2>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Player</th>
              <KeeperHeaderCellDisplayTablet>
                Acquired
              </KeeperHeaderCellDisplayTablet>
              <KeeperHeaderCellDisplayDesktop>
                16-17 Salary
              </KeeperHeaderCellDisplayDesktop>
              <KeeperHeaderCellDisplayDesktop>
                17-18 Salary
              </KeeperHeaderCellDisplayDesktop>
              <KeeperHeaderCellDisplayDesktop>
                18-19 Salary
              </KeeperHeaderCellDisplayDesktop>
              <KeeperHeaderCellDisplayTablet>
                19-20 Salary
              </KeeperHeaderCellDisplayTablet>
              <th>FYOT</th>
              <th>20-21 CTK</th>
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
                  {!player.node.data._2016_2017_Salary
                    ? "-"
                    : `$${player.node.data._2016_2017_Salary}`}
                </KeeperCellDisplayDesktop>
                <KeeperCellDisplayDesktop>
                  {!player.node.data._2017_2018_Salary
                    ? "-"
                    : `$${player.node.data._2017_2018_Salary}`}
                </KeeperCellDisplayDesktop>
                <KeeperCellDisplayDesktop>
                  {!player.node.data._2018_2019_Salary
                    ? "-"
                    : `$${player.node.data._2018_2019_Salary}`}
                </KeeperCellDisplayDesktop>
                <KeeperCellDisplayTablet>
                  {!player.node.data._2019_2020_Salary
                    ? "-"
                    : `$${player.node.data._2019_2020_Salary}`}
                </KeeperCellDisplayTablet>
                <td>{player.node.data.FYOT}</td>
                <td>${player.node.data._2020_2021_CTK}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TeamKeepersPage>
    </Layout>
  )
}

export default TeamKeepers

export const query = graphql`
  query teamKeeperQuery($teamName: String) {
    allAirtable(
      filter: { table: { eq: "keepers" }, data: { team: { eq: $teamName } } }
      sort: { fields: data____2020_2021_CTK, order: DESC }
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
            _2019_2020_Salary
            FYOT
            _2020_2021_CTK
          }
        }
      }
    }
  }
`
