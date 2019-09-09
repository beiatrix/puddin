import React from 'react'
import {StyledFormItem} from './styledFormItem'

const SignupSuccess = () => {
  return (
    <StyledFormItem>
      <h2>Well that was easy, you're now set.</h2>
      <p style={{marginLeft: 0, marginTop: '2rem'}}>
        Check your inbox, welcome to the club.
      </p>
    </StyledFormItem>
  )
}

export default SignupSuccess
