import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Landing, Login, Signup, UserHome} from './containers'
import {me} from './store'

/**
 * COMPONENT
 */
const Routes = props => {
  const {isLoggedIn, loadInitialData} = props

  useEffect(() => {
    loadInitialData()
  })

  return (
    <Switch>
      {/* Routes placed here are available to all visitors */}
      {/* <Route path="/" component={Landing} /> */}
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      {isLoggedIn && (
        <Switch>
          {/* Routes placed here are only available after logging in */}
          <Route path="/home" component={UserHome} />
        </Switch>
      )}
      {/* Displays our Login component as a fallback */}
      <Route component={Landing} />
    </Switch>
  )
}

/**
 *
 * CONTAINER
 *
 * While the presence of Redux in 2019 grosses me out, I can't be assed to refactor this. Live and let live my guy
 *
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
