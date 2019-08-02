import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import KeeperHeaderCellDisplayDesktop from "../components/keeper-header-cell-display-desktop"
import KeeperCellDisplayDesktop from "../components/keeper-cell-display-desktop"
import KeeperHeaderCellDisplayTablet from "../components/keeper-header-cell-display-tablet"
import KeeperCellDisplayTablet from "../components/keeper-cell-display-tablet"
import KeeperDataLastUpdated from "../components/keeper-data-last-updated"

const KeeperSection = styled.section`
  h3 {
    margin-bottom: 0.5rem;
  }
`

const KeeperSectionHeader = styled.div`
  margin-bottom: 0.5rem;
  @media screen and (min-width: 625px) {
    display: grid;
    grid-column-gap: 1rem;
    grid-template-columns: max-content max-content max-content;
  }
`

const reducer = (accumulator, currentValue) => accumulator + currentValue

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
})

const Keepers = ({ data }) => {
  // grab all the teams from each keeper
  const allKeepersTeamsArray = data.keeperData.edges.map(
    edge => edge.node.data.team
  )

  // use Set to remove duplicates from allKeepersTeamsArray
  const eachTeamSet = new Set(allKeepersTeamsArray)

  // turn Set back into an array
  const eachTeamArray = Array.from(eachTeamSet)

  // loop over eachTeamArray
  const teamsKeepers = eachTeamArray.map(team => {
    // return an array where each team is an array full of keepers
    return data.keeperData.edges.filter(player => {
      // put keepers into their respective team's arrays
      return player.node.data.team === team
    })
  })

  const getStartingBudget = team => {
    const startingBudget = data.teamData.edges.find(t => {
      if (t.node.data.name === team) {
        return t
      }
    })
    return startingBudget.node.data.starting_budget
  }

  const getTotalCTK = players => {
    const firstKeepersTeam = players[0].node.data.team
    const openRosterSpots = data.teamData.edges.find(t => {
      if (t.node.data.name === firstKeepersTeam) {
        return t
      }
    })
    const eachCTK = players.map(player => {
      return player.node.data.CTK
    })
    const totalCTK = (keeperCTK, openSpots) => {
      return keeperCTK + openSpots
    }
    return totalCTK(
      eachCTK.reduce(reducer),
      openRosterSpots.node.data.open_roster_spots
    )
  }

  const getAvailableBudget = (budget, ctk) => {
    const unformattedAvailableBudget = budget - ctk
    return formatter.format(unformattedAvailableBudget)
  }

  return (
    <Layout>
      <div>
        <h2>Keepers</h2>
        <KeeperDataLastUpdated>Updated: 19 July 2019</KeeperDataLastUpdated>
        {teamsKeepers.map((teamKeepersSection, index) => (
          <KeeperSection key={index}>
            <h3>{teamKeepersSection[0].node.data.team}</h3>
            <KeeperSectionHeader>
              <div>
                Starting Budget: $
                {getStartingBudget(teamKeepersSection[0].node.data.team)}
              </div>
              <div>Total CTK: ${getTotalCTK(teamKeepersSection)}</div>
              <div>
                Available Budget:{" "}
                {getAvailableBudget(
                  getStartingBudget(teamKeepersSection[0].node.data.team),
                  getTotalCTK(teamKeepersSection)
                )}
              </div>
            </KeeperSectionHeader>
            <table>
              <thead>
                <tr>
                  <th colSpan="2">Player</th>
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
                  <th>FYOT</th>
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
                    <td>{keeper.node.data.FYOT}</td>
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
    keeperData: allAirtable(
      sort: { fields: data___CTK, order: DESC }
      filter: { table: { eq: "keepers" } }
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
    teamData: allAirtable(filter: { table: { eq: "teams" } }) {
      edges {
        node {
          data {
            name
            starting_budget
            open_roster_spots
          }
        }
      }
    }
  }
`
