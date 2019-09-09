import React from 'react'
import styled from 'styled-components'

const SignupEmail = props => {
  const {handleChange, handleSubmit, error} = props

  return (
    <StyledEmail>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Let's get you goin', what's your email?</label>
          <input name="email" type="text" onChange={handleChange} />
        </div>
        {error && error.response && <div> {error.response.data}</div>}
        <p>Or to make things simpler, maybe log in with these guys</p>
        <div className="next-btn">
          <button type="submit">Next</button>
        </div>
      </form>
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
