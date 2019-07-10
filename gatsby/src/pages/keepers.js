import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>some data</h1>
        <table>
          <tr>
            <th>player</th>
            <th>team</th>
          </tr>
          {data.allAirtable.edges.map(({ node }, index) => (
            <tr key={index}>
              <td>{node.data.Player_Name__Team___Position_}</td>
              <td>{node.data.team}</td>
            </tr>
          ))}
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: {
        table: { eq: "keepers" }
        data: { team: { eq: "Bird Rights" } }
      }
    ) {
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
`
