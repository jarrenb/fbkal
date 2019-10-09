import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Header from "./Header"

const Layout = ({ breadcrumbs, children }) => {
  return (
    <>
      <Header breadcrumbs={breadcrumbs} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1450,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
