import React from "react"
import backgroundImg from './assets/background.png'
import { useStaticQuery, graphql } from "gatsby"

export const LandingHeader = () => {
  let { fl: { pages: { nodes:[ { pageContent: { header } } ] } }  } = useStaticQuery(
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
                buttonText
              }
            }
          }
        }
      }
    }
  `)
  return (<div className='wrapper centered' >
    <div className='header'>
      <div className='content centered'>
        {header.content}
      </div>
      <div className='centered'>
        <div className='subheader'>
          {header.subheader}
        </div>
      </div>
      <div className='centered'>
        <div className='button centered'> {header.buttonText} </div>
      </div>
    </div>
    <style jsx>{`
      .header{
        margin-top:-10px;
      }
      .button:hover{
        cursor:pointer;
        background-color:#e6bd32 !important;
        box-shadow: 0 2px 10px 0 rgba(25, 38, 53, 0.3);
      }
      .button{
        width: 270px;
        height: 60px;
        border-radius: 6px;
        box-shadow: 0 2px 40px 0 rgba(7, 22, 56, 0);
        background-color: #d0a617;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
        color: #ffffff;
      }
      .wrapper{
        position:relative;
        width: 100%;
        height: 800px;
        background-color: blue;
        display: flex ;
        background: url(${backgroundImg}) no-repeat center;
        background-size: cover;
        background-position:right;
      }
      .wrapper:after {
        top: 0;
        left: -25%;
        z-index: -1;
        width: 150%;
        height: 75%;
        background: #dd3333;
        -webkit-transform: rotate(-2deg);
        transform: rotate(-2deg);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        position: absolute;
        content: '';
        pointer-events: none;
      }
      .content{
        font-family: DM Serif Text;
        font-size: 72px;
        line-height: 1.15;
        text-align: center;
        color: #fefefe;
        margin-bottom:25px;
      }
      .subheader{
        max-width:592px;
        font-family: Montserrat;
        font-size: 24px;
        line-height: 1.46;
        text-align: center;
        color: #d0e9f8;
        margin-bottom:41px;
      }
    `}</style>  
  </div>)
}