import { Layout } from "../components/Layout";
import fetch from 'isomorphic-unfetch';

const B = ({ isLoading }) => {
    const title = "B page"
    const description = "B description"
    return (
        <Layout
            title={title}
            description={description}
            isLoading={isLoading}
        >
            <div>BBBB</div>
        </Layout>
    )
}

B.getInitialProps = async function () {
    await new Promise(resolve => {
        setTimeout(resolve, 1500)
    })

    return {

    };
};

export default B;