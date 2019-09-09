import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {SignupHeader, SignupForm} from '../components/signup'

const Signup = props => {
  const {handleSubmit, error} = props

  return (
    <StyledSignup>
      <SignupHeader />
      <SignupForm
        className="signup-form"
        handleSubmit={handleSubmit}
        error={error}
      />
    </StyledSignup>
  )
}

export default Signup

const StyledSignup = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--blue);
  display: flex;
  flex-direction: column;
  color: white;
`
