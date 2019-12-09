import { Layout } from "../components/Layout";
import fetch from 'isomorphic-unfetch';
import Link from 'next/link'

const A = ({ isLoading }) => {
    const title = "A page"
    const description = "A description"

    return (
        <Layout
            title={title}
            description={description}
            isLoading={isLoading}
        >
            <h1>AAAAA</h1>

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