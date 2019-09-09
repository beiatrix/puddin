import React from 'react'
import styled from 'styled-components'

const SignupEmail = props => {
  const {values, handleChange, errors} = props

  return (
    <StyledEmail>
      <div>
        <label htmlFor="email">Let's get you goin', what's your email?</label>
        <input
          name="email"
          id="email"
          value={values.email}
          type="text"
          onChange={handleChange}
        />
        {errors.email && <div style={{color: 'red'}}>{errors.email}</div>}
      </div>
      <p>Or to make things simpler, maybe log in with these guys</p>
    </StyledEmail>
  )
}

export default SignupEmail

const StyledEmail = styled.div`
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
