import React, {useState} from 'react'
import axios from 'axios'
import history from '../../history'
import {Formik} from 'formik'
import styled from 'styled-components'
import SignupEmail from './SignupEmail'
import SignupPass from './SignupPass'
import SignupOAuth from './SignupOAuth'
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
    <div>
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
            {step < 2 && <button type="submit">next</button>}
            {step === 2 && <button type="submit">submit</button>}
            {step === 3 && <SignupSuccess />}
          </form>
        )}
      />
    </div>
  )
}

export default SignupForm

const StyledForm = styled.div`
  height: 100%;
  padding: 120px;
`
