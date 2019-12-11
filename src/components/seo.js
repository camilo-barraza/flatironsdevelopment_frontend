/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, title, metaTags }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  let tags = []
  if(metaTags){
    if(metaTags.metaTags) 
      tags = tags.concat(metaTags.metaTags.map(tag => {
        return {
          [tag.attribute.type]:tag.attribute.value,
          content:tag.contentValue
        }
      }))
    if(metaTags.customMetaTags) 
      tags = tags.concat(metaTags.customMetaTags.map(tag => {
        return {
          [tag.attribute.type]:tag.attribute.value,
          content:tag.contentValue
        }
      }))
  }
  console.log(tags)
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={tags}
    />
  )
}

export default SEO
