import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import { API_URL } from '../constants/constants'
import { validateEmailInput } from '../utils/Validators'
import { useForm } from 'react-hook-form'
import { CustomButton } from '../UI/Atoms/Button'
import { RenderField } from '../UI/Atoms/RenderField'
import PropTypes from 'prop-types'

const Contact = ({ isLoading }) => {
  const title = 'Contact Us'
  const description = 'A description'

  const [submitting, setSubmitting] = useState(false)

  const { register, handleSubmit, reset, errors } = useForm()

  const onSubmit = async e => {
    setSubmitting(true)
    console.log(e)
    const hitData = {
      email: e.emailInput,
      text: e.textInput,
    }
    const response = await fetch(`${API_URL}/api/contact-email`, {
      method: 'POST',
      body: JSON.stringify(hitData),
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    })

    const data = await response.json()

    if (data.error) {
      console.log(data.error)
      throw new Error(data.error)
    }
    reset({
      emailInput: '',
      textInput: '',
    })
    setSubmitting(false)
    return data
  }

  return (
    <Layout title={title} description={description} isLoading={isLoading}>
      <h1>{title}</h1>
      <div className="row justify-content-center">
        <form className="col" onSubmit={handleSubmit(onSubmit)}>
          <h4 className="text-md-center">Please contact us</h4>
          <div className="container">
            <RenderField
              validationType={register({
                required: true,
                minLength: 3,
                validate: validateEmailInput,
              })}
              shortName="email"
              nameType="emailInput"
              errors={errors}
            />
            <RenderField
              validationType={register({ required: true })}
              shortName="text"
              nameType="textInput"
              errors={errors}
            />
            <CustomButton
              type={'submit'}
              text={submitting ? 'Sending' : 'Submit'}
            />
          </div>
        </form>
      </div>
    </Layout>
  )
}

Contact.getInitialProps = async function() {
  // await new Promise(resolve => {
  //     setTimeout(resolve, 1500)
  // })

  return {}
}
Contact.propTypes = {
  isLoading: PropTypes.bool,
}
export default Contact
