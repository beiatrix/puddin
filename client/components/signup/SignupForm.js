import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Formik} from 'formik'
import styled from 'styled-components'
import SignupEmail from './SignupEmail'
import SignupPass from './SignupPass'
import SignupSuccess from './SignupSuccess'
import validate from './validate'

const SignupForm = () => {
  const [step, setStep] = useState(1)
  const [formValues, setValues] = useState({
    email: '',
    password: ''
  })

  const next = values => {
    setStep(step + 1)
    setValues(values)
  }

  const onSubmit = async values => {
    const {email, password} = values
    try {
      const res = await axios.post(`/auth/signup`, {email, password})
      console.log(res.data)
    } catch (authError) {
      console.error(authError)
    }
  }

  const handleSubmit = (values, bag) => {
    next(values)
    if (step === 2) {
      return onSubmit(values)
    } else {
      bag.setSubmitting(false)
    }
  }

  return (
    <StyledForm>
      <Formik
        initialValues={formValues}
        validate={validate[step]}
        onSubmit={handleSubmit}
        render={({values, errors, handleChange, handleBlur, handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <SignupEmail
                values={values}
                errors={errors}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            )}
            {step === 2 && (
              <SignupPass
                values={values}
                errors={errors}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            )}
            {step === 3 && <SignupSuccess />}
            {step < 2 && <button type="submit">next</button>}
            {step === 2 && <button type="submit">submit</button>}
            {step === 3 && (
              <div id="signup-success">
                <Link to="/login">
                  <button type="submit">next</button>
                </Link>
              </div>
            )}
          </form>
        )}
      />
    </StyledForm>
  )
}

export default SignupForm

const StyledForm = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;

  button {
    margin-left: 4rem;
  }

  button:hover {
    cursor: pointer;
  }

  #signup-success {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  #signup-success button {
    background-color: var(--yellow);
  }
`
