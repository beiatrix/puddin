import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import styled from 'styled-components'
import {SignupHeader, SignupForm} from '../components/signup'

/**
 * COMPONENT
 */
const Signup = props => {
  const {handleSubmit, error} = props

  console.log('props?', props)
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

const mapStateToProps = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

/**
 * PROP TYPES
 */
Signup.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}

const StyledSignup = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--blue);
  display: flex;
  flex-direction: column;
  color: white;
`
