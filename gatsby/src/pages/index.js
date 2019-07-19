import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Announcements</h2>
    <section>
      <p>No announcements right now. Check back later</p>
    </section>
  </Layout>
)

export default IndexPage
