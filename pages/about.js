import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Layout } from "../components/Layout";

import fetch from 'isomorphic-unfetch';

const About = ({ isLoading, shows }) => {
    const title = "About page"
    const description = "About description"

    return (
        <Layout
            title={title}
            description={description}
            isLoading={isLoading}>
            <h1>Batman TV Shows</h1>
            <ul>
                {shows.map(show => (
                    <li key={show.id}>
                        <Link href={{ pathname: '/posts', query: { id: `${show.id}` } }} as={`/posts/${show.id}`}>
                            <a>{show.name} post #{show.id}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    )
};

About.getInitialProps = async function () {
    await new Promise(resolve => {
        setTimeout(resolve, 1500)
    })
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data.map(entry => entry.show)
    };
};

export default About;
