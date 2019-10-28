import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/layout"
import KeeperHeaderCellDisplayDesktop from "../components/keeper-header-cell-display-desktop"
import KeeperCellDisplayDesktop from "../components/keeper-cell-display-desktop"
import KeeperHeaderCellDisplayTablet from "../components/keeper-header-cell-display-tablet"
import KeeperCellDisplayTablet from "../components/keeper-cell-display-tablet"
import KeeperDataLastUpdated from "../components/keeper-data-last-updated"

const KeeperPageSection = styled.section`
  h2 {
    margin-bottom: 0.5rem;
  }
`

const KeeperSection = styled.section`
  h3 {
    margin-bottom: 0.5rem;

    a {
      color: #000;
      text-decoration: none;
    }

    a:hover {
      border-bottom: 2px solid red;
    }
  }
`

const KeeperSectionHeader = styled.div`
  margin-bottom: 0.5rem;
  columns: auto auto;
  > div {
    display: inline-block;
    margin-right: 1rem;
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

  const getTeamKeepersPageLink = team => {
    const teamSlug = data.teamData.edges.find(t => {
      if (t.node.data.name === team) {
        return t
      }
    })
    return teamSlug.node.data.slug
  }

  const getStartingBudget = team => {
    const startingBudget = data.teamData.edges.find(t => {
      if (t.node.data.name === team) {
        return t
      }
    })
    return startingBudget.node.data.starting_budget
  }

  const getTotalSalary = players => {
    const firstKeepersTeam = players[0].node.data.team
    const openRosterSpots = data.teamData.edges.find(t => {
      if (t.node.data.name === firstKeepersTeam) {
        return t
      }
    })
    const eachSalary = players.map(player => {
      return player.node.data._2019_2020_Salary
    })
    const totalSalary = (keeperSalary, openSpots) => {
      return keeperSalary + openSpots
    }
    return totalSalary(
      eachSalary.reduce(reducer),
      openRosterSpots.node.data.open_roster_spots
    )
  }

  const getTotalCTK = players => {
    const firstKeepersTeam = players[0].node.data.team
    const openRosterSpots = data.teamData.edges.find(t => {
      if (t.node.data.name === firstKeepersTeam) {
        return t
      }
    })
    const eachCTK = players.map(player => {
      return player.node.data._2020_2021_CTK
    })
    const totalCTK = (keeperCTK, openSpots) => {
      return keeperCTK + openSpots
    }
    return totalCTK(
      eachCTK.reduce(reducer),
      openRosterSpots.node.data.open_roster_spots
    )
  }

  const getAvailableBudget = (budget, salary) => {
    const unformattedAvailableBudget = budget - salary
    return formatter.format(unformattedAvailableBudget)
  }

  const breadcrumbs = [
    { to: "/", title: "FBKAL" },
    // { to: "/keepers", title: "Keepers" },
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <SEO title="Keepers" />
      <KeeperPageSection>
        <h2>Keepers</h2>
        <KeeperDataLastUpdated>Updated: 19 July 2019</KeeperDataLastUpdated>
        {teamsKeepers.map((teamKeepersSection, index) => (
          <KeeperSection key={index}>
            <h3>
              <Link
                to={`/keepers/${getTeamKeepersPageLink(
                  teamKeepersSection[0].node.data.team
                )}`}
              >
                {teamKeepersSection[0].node.data.team}
              </Link>
            </h3>
            <KeeperSectionHeader>
              <div>
                <strong>Starting Budget:</strong> $
                {getStartingBudget(teamKeepersSection[0].node.data.team)}
              </div>
              <div>
                <strong>Total Salary:</strong> $
                {getTotalSalary(teamKeepersSection)}
              </div>
              <div>
                <strong>Available Budget:</strong>{" "}
                <span>
                  {getAvailableBudget(
                    getStartingBudget(teamKeepersSection[0].node.data.team),
                    getTotalCTK(teamKeepersSection)
                  )}
                </span>
              </div>
              <div>
                <strong>Total 20-21 CTK:</strong> $
                {getTotalCTK(teamKeepersSection)}
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
                {teamKeepersSection.map((keeper, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{keeper.node.data.Player_Name__Team___Position_}</td>
                    <KeeperCellDisplayTablet>
                      {keeper.node.data.acquired}
                    </KeeperCellDisplayTablet>
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
                    <KeeperCellDisplayDesktop>
                      {keeper.node.data._2018_2019_Salary
                        ? `$${keeper.node.data._2018_2019_Salary}`
                        : "-"}
                    </KeeperCellDisplayDesktop>
                    <KeeperCellDisplayTablet>
                      {keeper.node.data._2019_2020_Salary
                        ? `$${keeper.node.data._2019_2020_Salary}`
                        : "-"}
                    </KeeperCellDisplayTablet>
                    <td>{keeper.node.data.FYOT}</td>
                    <td>{`$${keeper.node.data._2020_2021_CTK}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </KeeperSection>
        ))}
      </KeeperPageSection>
    </Layout>
  )
}

export default Keepers

export const query = graphql`
  {
    keeperData: allAirtable(
      sort: { fields: data____2020_2021_CTK, order: DESC }
      filter: { table: { eq: "keepers" } }
    ) {
      edges {
        node {
          data {
            team
            Player_Name__Team___Position_
            acquired
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
    teamData: allAirtable(filter: { table: { eq: "teams" } }) {
      edges {
        node {
          data {
            name
            slug
            starting_budget
            open_roster_spots
          }
        }
      }
    }
  }
`
