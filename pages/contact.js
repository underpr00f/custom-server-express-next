import React, { useState } from "react";
import { Layout } from "../components/Layout";
import fetch from 'isomorphic-unfetch';
import { API_URL } from "../constants/constants"
import { validateEmailInput } from '../utils/Validators'
// import { RenderField } from '../utils/RenderField'
import { useForm } from "react-hook-form"

const Contact = ({ isLoading }) => {
    const title = "Contact Us"
    const description = "A description"

    const [submitting, setSubmitting] = useState(false);

    const { register, handleSubmit, reset, errors } = useForm();


    const onSubmit = async (e) => {
        setSubmitting(true);
        console.log(e);
        const hitData = {
            "email": e.emailInput,
            "text": e.textInput
          };        
        const response = await fetch(`${API_URL}`+"/api/contact-email", {
            method: 'POST',
            body: JSON.stringify(hitData),
            headers: {
                "Content-type":"application/json",
                'Accept': 'application/json'
            }
        })

        const data = await response.json();

        if (data.error) {
            console.log(data.error);
            throw new Error(data.error);
        }
        reset({
            emailInput: '',
            textInput: '',
        });
        setSubmitting(false)
        return data;

    };

    return (

        <Layout
            title={title}
            description={description}
            isLoading={isLoading}
        >

            <h1>{title}</h1>
            <div className="row justify-content-center">
                <form
                    className="col"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h4 className="text-md-center">Please contact us</h4>
                    <div className="container">
                        <label htmlFor="emailInput">Input email</label>
                        <input
                            ref={register({
                                required: true,
                                minLength: 3,
                                validate: validateEmailInput
                            })}
                            placeholder="Input Email"
                            type="text"
                            name="emailInput"
                        />
                        {errors.emailInput
                            && errors.emailInput.type === "required" && <div className="alert alert-danger p-1"><small>This field is required</small></div>}
                        {errors.emailInput
                            && errors.emailInput.type === "minLength" && <div className="alert alert-danger p-1"><small>This field must have more than 3 characters</small></div>}
                        {errors.emailInput
                            && errors.emailInput.type === "validate" && <div className="alert alert-danger p-1"><small>Invalid email address</small></div>}

                    </div>
                    <div className="container">
                        <label htmlFor="textInput">Input text</label>
                        <input
                            ref={register({ required: true })}
                            placeholder="Input Text"
                            type="text"
                            name="textInput"

                        />
                        {errors.textInput
                            && errors.textInput.type === "required" && <div className="alert alert-danger p-1"><small>This field is required</small></div>}                        
                    </div>   
                    <button type="submit">{submitting ? "Sending": "Submit"}</button>                 
                </form>
            </div>

        </Layout>
    )
}

Contact.getInitialProps = async function () {
    // await new Promise(resolve => {
    //     setTimeout(resolve, 1500)
    // })


    return {
    };
};

export default Contact;