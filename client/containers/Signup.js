import React from 'react'
import PropTypes from 'prop-types'
// import {auth} from '../store'
import styled from 'styled-components'
import {SignupHeader, SignupForm} from '../components/signup'

/**
 * COMPONENT
 */
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

/**
 * PROP TYPES
 */
// Signup.propTypes = {
//   name: PropTypes.string.isRequired,
//   displayName: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   error: PropTypes.object
// }

const StyledSignup = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--blue);
  display: flex;
  flex-direction: column;
  color: white;
`
