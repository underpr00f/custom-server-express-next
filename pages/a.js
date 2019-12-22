import React, { useState } from "react";
import { Layout } from "../components/Layout";
import fetch from 'isomorphic-unfetch';
import { API_URL } from "../constants/constants"

const A = ({ isLoading }) => {
    const title = "Contact Us"
    const description = "A description"
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    // empty responsed problem
    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log("text submitted", text, email, API_URL);
        const hitData = {
            "email": email,
            "text": text
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
        console.log(data);
        if (data.error) {
            console.log(data.error);
            throw new Error(data.error);
        }
        console.log(data);
        setEmail(""); 
        setText(""); 
        return data;

    };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("text submitted", text, email, API_URL);
    //     const hitData = {
    //         "email": email,
    //         "text": text
    //     };
    //     fetch(`${API_URL}` + "/contact-email", {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(hitData)
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //         .catch(err => console.log(err))        
    // }
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
                    onSubmit={handleSubmit}
                >
                    <h4 className="text-md-center">Please contact us</h4>
                    <div className="container">
                        <label htmlFor="email">Input email</label>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Input Email"
                            type="text"
                            name="email"
                            required
                        />
                    </div>
                    <div className="container">
                        <label htmlFor="text">Input text</label>
                        <input
                            value={text}
                            onChange={e => setText(e.target.value)}
                            placeholder="Input Text"
                            type="text"
                            name="text"
                            required
                        />
                    </div>
                    <button type="submit">submit</button>

                </form>
            </div>

        </Layout>
    )
}

A.getInitialProps = async function () {
    await new Promise(resolve => {
        setTimeout(resolve, 1500)
    })


    return {
    };
};

export default A;