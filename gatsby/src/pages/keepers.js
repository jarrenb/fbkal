import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import KeeperHeaderCellDisplayDesktop from "../components/keeper-header-cell-display-desktop"
import KeeperCellDisplayDesktop from "../components/keeper-cell-display-desktop"
import KeeperHeaderCellDisplayTablet from "../components/keeper-header-cell-display-tablet"
import KeeperCellDisplayTablet from "../components/keeper-cell-display-tablet"

const KeeperSection = styled.section`
  h3 {
    margin-bottom: 0.5rem;
  }
`

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
        <div style={{ marginBottom: `1.5rem` }}>Updated 19 July 2019</div>
        {teamsKeepers.map((teamKeepersSection, index) => (
          <KeeperSection key={index}>
            <h3>{teamKeepersSection[0].node.data.team}</h3>
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
                  <KeeperHeaderCellDisplayTablet>
                    FYOT
                  </KeeperHeaderCellDisplayTablet>
                  <th>CTK</th>
                </tr>
              </thead>
              <tbody>
                {teamKeepersSection.map((keeper, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{keeper.node.data.Player_Name__Team___Position_}</td>
                    <KeeperCellDisplayTablet>
                      {keeper.node.data.acquired}
                    </KeeperCellDisplayTablet>
                    <KeeperCellDisplayDesktop>
                      {keeper.node.data._2012_2013_Salary
                        ? `$${keeper.node.data._2012_2013_Salary}`
                        : "-"}
                    </KeeperCellDisplayDesktop>
                    <KeeperCellDisplayDesktop>
                      {keeper.node.data._2013_2014_Salary
                        ? `$${keeper.node.data._2013_2014_Salary}`
                        : "-"}
                    </KeeperCellDisplayDesktop>
                    <KeeperCellDisplayDesktop>
                      {keeper.node.data._2014_2015_Salary
                        ? `$${keeper.node.data._2014_2015_Salary}`
                        : "-"}
                    </KeeperCellDisplayDesktop>
                    <KeeperCellDisplayDesktop>
                      {keeper.node.data._2015_2016_Salary
                        ? `$${keeper.node.data._2015_2016_Salary}`
                        : "-"}
                    </KeeperCellDisplayDesktop>
                    <KeeperCellDisplayDesktop>
                      {keeper.node.data._2016_2017_Salary
                        ? `$${keeper.node.data._2016_2017_Salary}`
                        : "-"}
                    </KeeperCellDisplayDesktop>
                    <KeeperCellDisplayDesktop>
                      {keeper.node.data._2017_2018_Salary
                        ? `$${keeper.node.data._2017_2018_Salary}`
                        : "-"}
                    </KeeperCellDisplayDesktop>
                    <KeeperCellDisplayTablet>
                      {keeper.node.data._2018_2019_Salary
                        ? `$${keeper.node.data._2018_2019_Salary}`
                        : "-"}
                    </KeeperCellDisplayTablet>
                    <KeeperCellDisplayTablet>
                      {keeper.node.data.FYOT}
                    </KeeperCellDisplayTablet>
                    <td>{`$${keeper.node.data.CTK}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </KeeperSection>
        ))}
      </div>
    </Layout>
  )
}

export default Keepers

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "keepers" } }
      sort: { fields: data___CTK, order: DESC }
    ) {
      edges {
        node {
          data {
            team
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
