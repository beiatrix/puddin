import React, {useState} from 'react'
import styled from 'styled-components'
import SignupEmail from './SignupEmail'
import SignupPass from './SignupPass'
import SignupOAuth from './SignupOAuth'
import SignupSuccess from './SignupSuccess'

const SignupForm = props => {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const {name, handleSubmit, error} = props
  const values = {email, pass}

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleChange = input => event => {
    if (input === 'email') {
      setEmail(event.target.value)
    } else if (input === 'pass') {
      setPass(event.target.value)
    }
  }

  switch (step) {
    case 1:
      return (
        <StyledForm>
          <SignupEmail
            handleSubmit={nextStep}
            handleChange={handleChange}
            values={values}
          />
        </StyledForm>
      )
    case 2:
      return (
        <StyledForm>
          <SignupPass
            handleSubmit={handleSubmit}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        </StyledForm>
      )
    case 3:
      return <SignupSuccess />
    // <SignupOAuth />
  }
}

export default SignupForm

const StyledForm = styled.div`
  height: 100%;
  padding: 120px;
`
