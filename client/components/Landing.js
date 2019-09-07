import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import styled from 'styled-components'

const Landing = ({handleClick}) => (
  <StyledLanding>
    <h1>puddin'</h1>
    <p>
      A new platform to <span className="strong">share</span> and{' '}
      <span className="strong">collaborate</span> for artists
    </p>
    <div>
      {/* The navbar will show these links before you log in */}
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button id="signup-btn">Sign Up</button>
      </Link>
    </div>
  </StyledLanding>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Landing)

/**
 * PROP TYPES
 */
Landing.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

/**
 * STYLES
 */
const StyledLanding = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--blue);
  color: white;

  .strong {
    font-weight: 600;
  }

  h1 {
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 2rem;
  }

  button {
    margin: 0.5rem;
  }

  #signup-btn {
    background: var(--yellow);
  }
`
