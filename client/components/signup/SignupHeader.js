import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const SignupHeader = () => {
  return (
    <StyledHeader>
      <h2>puddin'</h2>
      <Link to="/login">
        <button>Log In</button>
      </Link>
    </StyledHeader>
  )
}

export default SignupHeader

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 2rem;

  button {
    background: none;
    color: white;
  }
`
