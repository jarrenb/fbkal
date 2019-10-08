import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <h2>Announcements</h2>
      <section>
        <p>No announcements right now. Check back later</p>
      </section>
    </Layout>
  )
}

export default IndexPage
