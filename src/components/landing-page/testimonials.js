import React, { useState }  from "react"
import { useStaticQuery, graphql } from "gatsby"
import { SectionHeader } from "./sectionHeader"
import quoteImg from './assets/combined-shape.png'

var sleep = n => new Promise(resolve => setTimeout(resolve, n))

export const Testimonials = () => {
  let { fl: { pages: { nodes:[ { pageContent } ] } }  } = useStaticQuery(
    graphql`
    query Testimonials {
      fl{
        pages(where:{title:"Landing"}){
           nodes{
            title
            pageContent{
               testimonials{
                author
                authorRole
                authorImage {
                  sourceUrl
                }
                content
                companyLogo {
                  sourceUrl
                }
              }
              testimonialsButtonText
            }
          }
        }
      }
    }
  `)
  let { testimonials, testimonialsButtonText:buttonText } = pageContent
  const [animation, setAnimation] = useState('fade-in')
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  let data = testimonials[selectedTestimonial]
  return (<div className='wrapper centered'>
    <div className='container'>
      <div className='section-header'>
        <SectionHeader name="Our Clients" title="What they think of us"></SectionHeader>
        <div className='quote-icon-wrapper centered'>
          <div className='quote-icon'>
            <img className='quote-img' src={quoteImg} alt='quote' />
          </div>
        </div>
        <div className={`quote ${animation}`}>
          <div className='content-wrapper centered'>
            <div className='content'>
              “{data.content}”
            </div>
          </div>
          <div className='author-wrapper'>
            <div className='author-info horizontal'>
              <img className='author-image' alt="pic" src={data.authorImage.sourceUrl}></img>
              <div style={{marginLeft:'12px'}}>
                <div className='author-name'>
                  {data.author}
                </div>            
                <div className='author-role' >
                  {data.authorRole}
                </div>
              </div>
              <div className='company-info'>
                <div style={{visibility:'hidden'}}>t</div>
                <div className='desktop-logo' >
                  <img height="23px" className='company-logo' alt="logo" src={data.companyLogo.sourceUrl}/>
                </div>
              </div>
            </div>
            <div className='mobile-logo' >
              <img height="23px" className='company-logo' alt="logo" src={data.companyLogo.sourceUrl}/>
            </div>
          </div>
        </div>
        <div className='selectors centered'>
          {testimonials.map((t, index) => (<div key={index}>
            <a href='#testimonials'>
              <div onClick={async () => {
                setSelectedTestimonial(index)
                setAnimation('hidden')
                await sleep(150)
                setAnimation('fade-in')
              }} className={`selector ${selectedTestimonial === index ? 'selected':''}`}></div>
            </a>
          </div>))}
        </div>
      </div>
      <div className='centered'>
        <button className='button centered'> <a href='#contact' style={{textDecoration:'none'}} >  {buttonText}  </a> </button>
      </div>
    </div>
    <style jsx>{`
      .container{
        margin:0 7% 0 9%;
        max-width:729px;
      }
      .quote-icon-wrapper{
        height:0px;
      }
      .mobile-logo{
        display:none;
        margin-left:64px;
        margin-top:8px;
      }
      button{
        outline:none;
        border:none;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;
      }
      a, a:visited{
        outline:none;
        color:white;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;
      }
      
      .quote-icon{
        width: 100%;
        text-align:left;
        margin-left:-50px;
        margin-top:70px;
      }
      .author-info{
        margin-top:20px;
        text-align:left;
      }
      .fade-in{
        opacity: 1;
        transition: opacity .5s ease-in-out;
        -moz-transition: opacity .5s ease-in-out;
        -webkit-transition: opacity .5s ease-in-out;
      }
      .button:hover, .button:focus{
        cursor:pointer;
        background-color:#3869d2 !important;
        box-shadow: 0 2px 10px 0 rgba(25, 38, 53, 0.3);
        transition: background-color 250ms linear;
      }
      .button{
        width: 270px;
        height: 60px;
        border-radius: 6px;
        box-shadow: 0 2px 40px 0 rgba(7, 22, 56, 0);
        background-color: #2a52a9;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
        color: #ffffff;
        transition: background-color 250ms linear;
      }
      .hidden{
        opacity:0
      }
      .company-info{
        margin-left:22px;
      }
      .quote{
        min-height:340px;
      }
      .selectors{
        margin-top:12px;
        margin-bottom:57px;
      }
      .selector{
        width: 10px;
        height: 10px;
        border-radius:100%;
        margin: 0 4px;
        background-color: #e8e8e8;
      }
      .selector:hover{
        cursor:pointer;
        opacity:0.7
      }
      .selected{
        background-color: #d0a617;
      }
      .author-name{
        white-space: nowrap;
        overflow: hidden;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 600;
        color: #071638;
      }
      .author-role{
        opacity: 0.62;
        white-space: nowrap;
        overflow: hidden;
        font-family: Montserrat;
        font-size: 18px;
        color: #2c3956;
      }
      .content-wrapper{
        margin-top:32px;
      }
      .content{
        text-align:left;
        font-family: Montserrat;
        font-size: 18px;
        line-height: 2.22;
        color: rgba(7, 22, 56, 0.85);
      }
      .company-logo{
        margin-top:1px;
        max-height: 23px;
      }
      .author-image{
        height:49px;
        border-radius:50%;
      }
      .desktop-logo{
      }
      @media all and (max-width: 500px) {
        .mobile-logo{
          display:flex;
        }
        .desktop-logo{
          display:none;
        }
        .selectors{
          margin-top:10%;
        }
        .section-header{
          padding-top:20% !important;
        }
        .quote-icon{
          margin-left: -10px !important;
        }
      }
      
      .section-header{
        padding-top:110px;
      }
      .wrapper{
        padding-bottom: 81px;
        background-image: linear-gradient(to bottom, #ffffff, #f6f9fc);
      }
    `}</style>
  </div>)
}