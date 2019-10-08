import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import Breadcrumb from "./Breadcrumb"

const Header = () => {
  const breadcrumbs = [
    { to: "/", title: "FBKAL" },
    // { to: "/keepers", label: "Keepers" },
  ]

  return (
    <header>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1450,
          padding: `1.5rem 1.0875rem`,
        }}
      >
        <Breadcrumb>
          {breadcrumbs.map(({ to, title }) => (
            <Link key={to} to={to}>
              {title}
            </Link>
          ))}
        </Breadcrumb>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
