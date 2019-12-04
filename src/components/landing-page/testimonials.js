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
              buttonText
            }
          }
        }
      }
    }
  `)
  let { testimonials, buttonText } = pageContent
  const [animation, setAnimation] = useState('fade-in')
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  let data = testimonials[selectedTestimonial]
  return (<div className='wrapper'>
    <div className='section-header'>
      <SectionHeader name="Our Clients" title="What they think of us "></SectionHeader>
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
        <div className='author-wrapper centered'>
          <div className='author-info horizontal'>
            <img alt="pic" src={data.authorImage.sourceUrl}></img>
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
              <div className='company-logo' >
                <img alt="logo" src={data.companyLogo.sourceUrl}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='selectors centered'>
        {testimonials.map((t, index) => (<div key={index}>
          <div onClick={async () => {
            setSelectedTestimonial(index)
            setAnimation('hidden')
            await sleep(150)
            setAnimation('fade-in')
          }} className={`selector ${selectedTestimonial === index ? 'selected':''}`}></div>
        </div>))}
      </div>
    </div>
    <div className='centered'>
        <div className='button centered'> {buttonText} </div>
      </div>
    <style jsx>{`
      .quote-icon-wrapper{
        height:0px;
      }
      .quote-icon{
        width: 729px;
        text-align:left;
        margin-left:-50px;
        margin-top:70px;
      }
      .author-info{
        width: 729px;
        margin-top:20px;
        text-align:left;
      }
      .fade-in{
        opacity: 1;
        transition: opacity .5s ease-in-out;
        -moz-transition: opacity .5s ease-in-out;
        -webkit-transition: opacity .5s ease-in-out;
      }
      .button:hover{
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
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 600;
        color: #071638;
      }
      .author-role{
        opacity: 0.62;
        font-family: Montserrat;
        font-size: 18px;
        color: #2c3956;
      }
      .content-wrapper{
        margin-top:32px;
      }
      .content{
        width: 729px;
        text-align:left;
        font-family: Montserrat;
        font-size: 18px;
        line-height: 2.22;
        color: rgba(7, 22, 56, 0.85);]
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