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
        <button className='button centered'> <a href='#contact' style={{textDecoration:'none'}} >  {header.buttonText}  </a></button>
      </div>
    </div>
    <style jsx>{`
      .header{
        margin-top:-10px;
        width:100%;
      }
      a, a:visited, a:focus{
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;
        color:white;
        outline:none;
      }
      .button:hover, .button:focus{
        cursor:pointer;
        background-color:#e6bd32 !important;
        box-shadow: 0 2px 10px 0 rgba(25, 38, 53, 0.3);
        transition: background-color 250ms linear;
      }
      button{
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        outline:none;
        border:none;
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
        transition: background-color 250ms linear;
      }
      @media all and (max-width: 900px) {
        .wrapper:after{
          left:-9% !important;
          -webkit-transform: rotate(-4.5deg) !important;
          transform: rotate(-4.5deg) !important;
          background-position: 100% center !important;
        }
        .content{
          font-size:60px !important;
        }
        .subheader{
          font-size:22px !important;
        }
      }
      @media all and (max-width: 760px) {
        .content{
          font-size:55px !important;
        }
        .subheader{
          font-size:21px !important;
          font-weight:500 !important;
        }
        .wrapper:after{
          left:-20% !important;
          width: 130% !important;
          -webkit-transform: rotate(-5deg) !important;
          transform: rotate(-5deg) !important;
          background-position: 100% center !important;
        }
      }
      @media all and (max-width: 500px) {
        .wrapper{
          height:190vw !important;
        }
        .content{
          margin-top:0vw;
          font-size:42px !important;
          line-height: 1.18 !important;
          margin-bottom: 32px !important;
        }
        .subheader{
          font-size: 18px !important;
          font-weight: 500 !important;
          margin-bottom: 32px !important;
        }
        .wrapper:after{
          left:-30% !important;
          width: 150% !important;
          -webkit-transform: rotate(-6deg) !important;
          transform: rotate(-6deg) !important;
          background-position: 100% center !important;
        }
      }
      
      .wrapper{
        position:relative;
        width: 100%;
        height: 800px;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      .wrapper:after {
        top: 0%;
        left:-5%;
        z-index: -1;
        width: 110%;
        height: 105%;
        -webkit-transform: rotate(-3deg);
        transform: rotate(-3deg);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        position: absolute;
        content: '';
        background: url(${backgroundImg}) no-repeat center;
        background-size: cover;
        background-position:right;
        pointer-events: none;
        background-color:#2a52a9;
      }
      .content{
        font-family: DM Serif Text;
        font-size: 72px;
        line-height: 1.15;
        text-align: center;
        color: #fefefe;
        margin-right:10%;
        margin-left:10%;
        margin-bottom:25px;
      }
      .subheader{
        max-width:592px;
        font-family: Montserrat;
        font-size: 24px;
        line-height: 1.46;
        text-align: center;
        color: #d0e9f8;
        margin-right:10%;
        margin-left:10%;
        margin-bottom:41px;
      }
    `}</style>  
  </div>)
}