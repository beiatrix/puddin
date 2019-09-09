import React from 'react'
import {StyledFormItem} from './styledFormItem'

const SignupPass = props => {
  const {values, handleChange, errors} = props

  return (
    <StyledFormItem>
      <div>
        <label htmlFor="password">Set up your password</label>
        <input
          name="password"
          id="password"
          value={values.password}
          type="password"
          onChange={handleChange}
        />
        {errors.password && (
          <span style={{margin: 0, color: 'red'}}>{errors.password}</span>
        )}
      </div>
    </StyledFormItem>
  )
}

export default SignupPass
