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
          <KeeperSection key={index}>
            <h3>{teamKeepersSection[0].node.data.team}</h3>
            <KeeperTable>
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Acquired</th>
                  <th>12-13 Salary</th>
                  <th>13-14 Salary</th>
                  <th>14-15 Salary</th>
                  <th>15-16 Salary</th>
                  <th>16-17 Salary</th>
                  <th>17-18 Salary</th>
                  <th>18-19 Salary</th>
                  <th>FYOT</th>
                  <th>CTK</th>
                </tr>
              </thead>
              <tbody>
                {teamKeepersSection.map((keeper, index) => (
                  <tr key={index}>
                    <td>{keeper.node.data.Player_Name__Team___Position_}</td>
                    <td>{keeper.node.data.acquired}</td>
                    <td>
                      {keeper.node.data._2012_2013_Salary
                        ? `$${keeper.node.data._2012_2013_Salary}`
                        : "-"}
                    </td>
                    <td>
                      {keeper.node.data._2013_2014_Salary
                        ? `$${keeper.node.data._2013_2014_Salary}`
                        : "-"}
                    </td>
                    <td>
                      {keeper.node.data._2014_2015_Salary
                        ? `$${keeper.node.data._2014_2015_Salary}`
                        : "-"}
                    </td>
                    <td>
                      {keeper.node.data._2015_2016_Salary
                        ? `$${keeper.node.data._2015_2016_Salary}`
                        : "-"}
                    </td>
                    <td>
                      {keeper.node.data._2016_2017_Salary
                        ? `$${keeper.node.data._2016_2017_Salary}`
                        : "-"}
                    </td>
                    <td>
                      {keeper.node.data._2017_2018_Salary
                        ? `$${keeper.node.data._2017_2018_Salary}`
                        : "-"}
                    </td>
                    <td>
                      {keeper.node.data._2018_2019_Salary
                        ? `$${keeper.node.data._2018_2019_Salary}`
                        : "-"}
                    </td>
                    <td>{keeper.node.data.FYOT}</td>
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
