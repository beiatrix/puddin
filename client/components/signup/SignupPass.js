import React from 'react'

const SignupPass = props => {
  const {handleChange, handleSubmit, error} = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="password">Set up your password</label>
        <input name="password" type="password" onChange={handleChange} />
      </div>
      <div>
        <button type="submit">Next</button>
      </div>
      {error && error.response && <div> {error.response.data} </div>}
    </form>
  )
}

export default SignupPass
