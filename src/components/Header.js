import { Link } from 'gatsby'

import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
  display:flex;
  align-items: center;
  justify-content: center;
`

const HeaderLink = styled(Link)`{
  padding: 1rem 2rem;
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}`

const Header = () => (
  <Container>
  </Container>
)

export default Header
