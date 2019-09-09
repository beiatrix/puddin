import React from 'react'
import {StyledFormItem} from './styledFormItem'
import SignupOAuth from './SignupOAuth'

const SignupEmail = props => {
  const {values, handleChange, errors} = props

  return (
    <StyledFormItem>
      <div>
        <label htmlFor="email">Let's get you goin', what's your email?</label>
        <input
          name="email"
          id="email"
          value={values.email}
          type="text"
          onChange={handleChange}
        />
        {errors.email && (
          <span style={{marginLeft: 0, color: 'red'}}>{errors.email}</span>
        )}
      </div>
      <p style={{marginTop: '2rem'}}>
        Or to make things simpler, maybe log in with these guys
      </p>
      <SignupOAuth />
    </StyledFormItem>
  )
}

export default SignupEmail
