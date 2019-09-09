import React from 'react'

const SignupEmail = props => {
  const {handleChange, handleSubmit, error} = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Let's get you goin', what's your email?</label>
        <input name="email" type="text" onChange={handleChange} />
      </div>
      <div>
        <button type="submit">Next</button>
      </div>
      {error && error.response && <div> {error.response.data}</div>}
    </form>
  )
}

export default SignupEmail
