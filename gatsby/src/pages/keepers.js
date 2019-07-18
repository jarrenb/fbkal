import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

const KeeperSection = styled.section`
  margin-bottom: 1.5rem;
  h3 {
    margin-bottom: 0.5rem;
  }
`

const KeeperTable = styled.table`
  font-size: 0.9rem;
  margin-bottom: 0;
  tr:hover td {
    background-color: #ddd;
  }
  td,
  th {
    border-color: #ddd;
    border-style: solid;
    border-width: 1px;
    padding-bottom: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0;
  }
  th {
    text-align: center;
  }
`

const KeeperHeaderCellDisplayDesktop = styled.th`
  @media screen and (max-width: 1000px) {
    display: none;
  }
`

const KeeperCellDisplayDesktop = styled.td`
  @media screen and (max-width: 1000px) {
    display: none;
  }
`

const KeeperHeaderCellDisplayTablet = styled.th`
  @media screen and (max-width: 600px) {
    display: none;
  }
`

const KeeperCellDisplayTablet = styled.td`
  @media screen and (max-width: 600px) {
    display: none;
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
        <div style={{ marginBottom: `1.5rem` }}>Updated 8 July 2019</div>
        {teamsKeepers.map((teamKeepersSection, index) => (
          <KeeperSection key={index}>
            <h3>{teamKeepersSection[0].node.data.team}</h3>
            <KeeperTable>
              <thead>
                <tr>
                  <th>Player</th>
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
            </KeeperTable>
          </KeeperSection>
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
