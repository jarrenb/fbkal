import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const breadcrumbs = [
    { to: "/", title: "FBKAL" },
    // { to: "/keepers", label: "Keepers" },
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <SEO />
      <h2>Announcements</h2>
      <section>
        <p>No announcements right now. Check back later</p>
      </section>
    </Layout>
  )
}

export default IndexPage
