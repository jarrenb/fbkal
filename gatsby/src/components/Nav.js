import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavSection = styled.section`
  margin-bottom: 1rem;

  a {
    color: #000;
    text-decoration: none;
  }

  a:hover {
    border-bottom: 2px solid red;
  }
`

const Nav = () => (
  <NavSection>
    <strong>
      <Link to="/keepers">Keepers</Link>
    </strong>
  </NavSection>
)

export default Nav
