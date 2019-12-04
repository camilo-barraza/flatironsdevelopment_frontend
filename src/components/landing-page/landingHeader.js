import React from "react"

export const LandingHeader = (props) => {
  let { fl: { pages: { nodes:[ { pageContent: header } ] } }  } = useStaticQuery(
    graphql`
    query Header {
      fl{
        pages(where:{title:"Landing"}){
           nodes{
            title
            pageContent{
              header{
                content
                subheader
              }
            }
          }
        }
      }
    }
  `)
  return (<div style={{backgroundColor:'red'}}>
    <pre> {JSON.stringify(header,null,2)} </pre> 
  </div>)
}