import React from 'react'
import styled from 'styled-components'

const SignupOAuth = props => {
  return (
    <StyledOAuth>
      <a href="/auth/google">Google</a>
    </StyledOAuth>
  )
}

export default SignupOAuth

const StyledOAuth = styled.div`
  color: white;
`
