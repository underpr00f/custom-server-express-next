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
// class About extends React.Component {
//   static pageTransitionDelayEnter = true
// //   static async getInitialProps ({ Component, ctx }) {
// //     await new Promise(resolve => {
// //       setTimeout(resolve, 2000)
// //     })
// //     return {}
// //   }
//   constructor(props) {
//     super(props)
//     this.state = {
//       loaded: false,
//     }
//   }

//   componentDidMount() {

//     this.timeoutId = setTimeout(() => {
//       this.props.pageTransitionReadyToEnter()
//       this.setState({ loaded: true })
//     }, 2000)
//   }

//   componentWillUnmount() {
//     if (this.timeoutId) clearTimeout(this.timeoutId)
//   }




//   render() {
//     const title = "About page"
//     const description = "About description"

//     if (!this.state.loaded) return null
//     return (
//         <Layout
//             title={title}
//             description={description}
//         >
//             <div className="container bg-success page">
//                 <h1>About us</h1>
//                 <p>
//                 Notice how a loading spinner showed up while my content was "loading"?
//                 Pretty neat, huh?
//                 </p>
//                 <Link href="/">
//                 <a className="btn btn-light">Go back home</a>
//                 </Link>
//             </div>
//         </Layout>
//     )
//   }
// }

// About.propTypes = {
//   pageTransitionReadyToEnter: PropTypes.func,
// }

// About.defaultProps = {
//   pageTransitionReadyToEnter: () => {},
// }

// export default About