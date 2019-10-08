import React from "react"
import { Link } from "gatsby"
import Breadcrumb from "./Breadcrumb"

const Header = ({ breadcrumbs }) => {
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
          {breadcrumbs.map(({ to, title }, index) => (
            <Link key={`breadcrumb_link_${index}`} to={to}>
              {title}
            </Link>
          ))}
        </Breadcrumb>
      </div>
    </header>
  )
}

export default Header
