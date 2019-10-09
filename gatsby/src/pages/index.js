import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/Nav"

const AnnouncementSection = styled.section`
  h2 {
    margin-bottom: 0.5rem;
  }
`

const IndexPage = () => {
  const breadcrumbs = [
    { to: "/", title: "FBKAL" },
    // { to: "/keepers", label: "Keepers" },
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <SEO />
      <Nav />
      <AnnouncementSection>
        <h2>Announcements</h2>
        <p>No announcements right now. Check back later</p>
      </AnnouncementSection>
    </Layout>
  )
}

export default IndexPage
