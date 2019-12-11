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
import { Menu } from "../components/landing-page/menu"

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]', {
    speed: 350
  })
}

const IndexPage = ( { data }) => {
  const { fl: { pages: { nodes:[ { SEO:seo } ] } }  } = data
  const { fl: { pages: { nodes:[  { pageContent:{ pageTitle} } ] } } } = data
  return (
    <div>
      <SEO metaTags={seo} title={pageTitle} page="Landing" />
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Menu></Menu>
      <div id='mission'>
        <LandingHeader></LandingHeader>
      </div>
      <div id='work'>
        <Clients></Clients>
      </div>
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
      pages(where:{title:"Landing"}){
        nodes{
          pageContent{
            pageTitle
          }
          SEO{
            metaTags {
              attribute{
                type
                value
              }
              contentValue
            }
            customMetaTags{
              attribute{
                type
                value
              }
              contentValue
            }
          }
        }
      }
    }
  }
`

export default IndexPage
