const validate = {
  1: values => {
    const errors = {}
    if (!values.email) errors.email = 'required'
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
      errors.email = 'invalid email address'
    return errors
  },
  2: values => {
    const errors = {}
    if (!values.password) errors.password = 'required'
    return errors
  }
}

export default validate
