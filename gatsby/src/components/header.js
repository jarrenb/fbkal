import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Breadcrumb from "./Breadcrumb"

const InnerHeaderDiv = styled.div`
  margin: 0 auto;
  max-width: 1450px;
  padding: 1.5rem 1.0875rem;

  a {
    color: #000;
    text-decoration: none;
  }

  a:hover {
    border-bottom: 2px solid red;
  }
`

const Header = ({ breadcrumbs }) => {
  return (
    <header>
      <InnerHeaderDiv>
        <Breadcrumb>
          {breadcrumbs.map(({ to, title }, index) => (
            <Link key={`breadcrumb_link_${index}`} to={to}>
              {title}
            </Link>
          ))}
        </Breadcrumb>
      </InnerHeaderDiv>
    </header>
  )
}

export default Header
