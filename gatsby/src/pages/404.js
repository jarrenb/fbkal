import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  const breadcrumbs = [{ to: "/", title: "FBKAL" }]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <SEO title="404: Not found" />
      <h2>NOT FOUND</h2>
      <p>You just requested a page that doesn&#39;t exist. I'm sorry.</p>
    </Layout>
  )
}

export default NotFoundPage
