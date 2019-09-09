import React from 'react'
import styled from 'styled-components'

const SignupPass = props => {
  const {handleChange, handleSubmit, error} = props

  return (
    <StyledPass>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">Set up your password</label>
          <input name="password" type="password" onChange={handleChange} />
        </div>
        <div className="next-btn">
          <button type="submit">Next</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
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
