import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { LandingHeader } from "../components/landing-page/landingHeader"
import { Clients } from "../components/landing-page/clients"
import { Testimonials } from "../components/landing-page/testimonials"
import { Helmet } from "react-helmet"
import { Technologies } from "../components/landing-page/technologies"
import { Portfolio } from "../components/landing-page/portfolio"
import { Leadership } from "../components/landing-page/leadership"
import { ContactUs } from "../components/landing-page/contactUs"
import { Footer } from "../components/landing-page/footer"

const IndexPage = ({ data: {fl: { posts: { edges:blogPosts } } } } ) => {
  return (
    <div>
      <SEO title="Home" />
      <Helmet>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <script src="js/scroll-local-path.js" />
      </Helmet>
      <LandingHeader></LandingHeader>
      <Clients></Clients>
      <div id="testimonials">
        <Testimonials></Testimonials>
      </div>
      <div id="technologies">
        <Technologies></Technologies>
      </div>
      <div id="portfolio">
        <Portfolio></Portfolio>
      </div>
      <div id="leadership">
        <Leadership></Leadership>
      </div>
      <div id='contact'>
        <ContactUs></ContactUs>
      </div>
      <Footer></Footer>
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
    </div>
  )
}

export const query = graphql`
  query getPosts {
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
