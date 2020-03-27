import React, { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import { Layout } from '../components/Layout'
import { API_URL } from '../constants/constants'
import { validateEmailInput } from '../utils/Validators'
import { CustomButton } from '../UI/Atoms/Button'
import { RenderField } from '../UI/Atoms/RenderField'
import { MaterialForm } from '../UI/Molecules/MaterialForm'

type hitDataType = {
  emailInput: string,
  textInput: string
}

const Contact = ({ isLoading, yourUrl }: { isLoading:boolean, yourUrl:string }) => {
  const title = 'Свяжитесь с нами'
  const description = 'Форма для обратной связи'
  const imgUrl = 'https://images.unsplash.com/photo-1495435229349-e86db7bfa013?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1529&q=80'
  const [submitting, setSubmitting] = useState(false)

  const { register, handleSubmit, reset, errors } = useForm<hitDataType>()

  const onSubmit = async (e: any) => {
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
    <Layout
      title={title}
      description={description}
      isLoading={isLoading}
      yourUrl={yourUrl}
      imgUrl={imgUrl}
    >
      <MaterialForm>
      <div className="container mt-3">
        <div className="row">
          <form className="xs-6" onSubmit={handleSubmit(onSubmit)}>
            <h5 className="text-md-center">Пожалуйста свяжитесь с нами</h5>
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
                type="submit"
                text={submitting ? 'Sending' : 'Submit'}
              />
            </div>
          </form>
        </div>
      </div>
      </MaterialForm>
    </Layout>
  )
}

Contact.getInitialProps = async () => {
  // await new Promise(resolve => {
  //     setTimeout(resolve, 1500)
  // })

  return {}
}
Contact.propTypes = {
  isLoading: PropTypes.bool,
  yourUrl: PropTypes.string,
}
export default Contact
