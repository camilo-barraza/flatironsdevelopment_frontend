import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data: {fl: { posts: { edges:blogPosts } } } } ) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{backgroundColor:'blue'}}>
        <h1 className='header'>Build Better Products.</h1>
        <p className='test'>Welcome  fdas to your new Gatsby site.</p>
        <div className='subheader'>
          We build beautiful consumer facing software that improves business metrics.
        </div>
        {blogPosts.map((post, index) => (<div key={index}>
          {post.node.title}
        </div>))}
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
      <style jsx>{`
        .header{
          width: 816px;
          height: 83px;
          font-family: DM Serif Text;
          font-weight:normal;
          font-size: 72px;
          line-height: 1.15;
          text-align: center;
          color: #fefefe;
          background-color:blue;
        }
        .subheader{
          width: 592px;
          height: 70px;
          font-family: Montserrat;
          font-size: 24px;
          line-height: 1.46;
          text-align: center;
          color: #d0e9f8;
        }
      `}</style>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    fl {
      posts(first: 10000) {
        edges {
          node {
            slug
            title
            content
          }
        }
      }
    }
  }
`

export default IndexPage
