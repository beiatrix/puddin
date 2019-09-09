import React from 'react'
import styled from 'styled-components'

const SignupPass = props => {
  const {values, handleChange, errors} = props

  return (
    <StyledPass>
      <div>
        <label htmlFor="password">Set up your password</label>
        <input
          name="password"
          id="password"
          value={values.password}
          type="password"
          onChange={handleChange}
        />
        {errors.password && <div style={{color: 'red'}}>{errors.password}</div>}
      </div>
    </StyledPass>
  )
}

export default SignupPass

const StyledPass = styled.div`
  div > * {
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
  }

  p {
    margin-left: 16px;
  }

  .next-btn {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`
