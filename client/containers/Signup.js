import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import styled from 'styled-components'
import {SignupHeader} from '../components/signup'

/**
 * COMPONENT
 */
const Signup = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <StyledSignup>
      <SignupHeader />
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <a href="/auth/google">{displayName} with Google</a>
    </StyledSignup>
  )
}

const mapState = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
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

export default connect(mapState, mapDispatch)(Signup)

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

  input: {
    border: none;
    background-color: transparent;
    -webkit-appearance: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border-bottom: 1px solid white;
  }
`
