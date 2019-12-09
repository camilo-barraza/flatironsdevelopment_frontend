import React, { useState } from 'react'
import backgroundImg from './assets/background-footer.svg'
import logoImg from './assets/logo.svg'
import { Formik } from 'formik'
import * as Yup from 'yup'
import TextArea from '../utils/TextArea'
import TextField from '../utils/TextField'
import Spinner from '../utils/Spinner'
import { useStaticQuery, graphql } from "gatsby"
import config from '../../config'
import axios from 'axios'

let ContactUsSchema = Yup.object().shape({ 
  name: Yup.string()
    .min(1, 'Too Short!')
    .required('Required'),
  email: Yup.string()
    .min(1, 'Too Short!')
    .required('Required').email('Invalid email'),
  message: Yup.string()
    .min(5, 'Too Short!')
    .required('Required')
})

var sleep = n => new Promise(resolve => setTimeout(resolve, n))

const Form = ({ onSubmit, onDisplaySentMessage }) => {
    const [loading, setLoading] = useState(false);
    return (<div className='wrapper'>
      {loading &&
        <div className='spinner-wrapper centered'> 
          <div className='spinner'>
            <Spinner></Spinner>
          </div>
        </div>}
       <Formik
          initialValues={{
            name:'',
            email:'',
            message:''
          }}
          validationSchema={ContactUsSchema}
          onSubmit={async (values) => {
            setLoading(true)
            try{
              await axios.post(`${config.backendUrl}/wp-json/fl/v1/contact-us`, {
                name: values.name,
                email: values.email,
                message: values.message
              })
            }
            catch(err){
              alert('An error has occurred, please try again later');
              setLoading(false)
              throw err
            }
            onSubmit()
            await sleep(10)
            setLoading(false)
            onDisplaySentMessage()
          }}
        >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className='name'>
              <TextField 
                name='name'
                errorMsg={errors.name}
                touched={touched.name}
                onChange={handleChange}
                onBlur={handleBlur} 
                width='100%' 
                type='text' 
                value={values.name}
                placeholder='Your Name' />
            </div>
            <div className='email'>
              <TextField 
                name='email'
                errorMsg={errors.email}
                touched={touched.email}
                onChange={handleChange}
                onBlur={handleBlur} 
                width='100%' 
                type='text' 
                value={values.email}
                placeholder='Work Email' />
            </div>
            <div className='message'>
              <TextArea 
                name='message'
                errorMsg={errors.message}
                touched={touched.message}
                onChange={handleChange}
                onBlur={handleBlur} 
                width='100%' 
                type='text' 
                value={values.message}
                label='How can we Help you?' />
            </div>
            <div >
              <div className='centered' >
                <button className='button centered' disabled={isSubmitting} > Send </button>
              </div>
            </div>
          </form>
          )}
      </Formik> 
      <style jsx>{`
        .wrapper{
          opacity: ${loading? '0.4' :'1' };
          pointer-events: ${loading? 'none' :'' };
        }
        .spinner-wrapper{
          width:100%;
        }
        .spinner{
          margin-top:150px;
          opacity:0.5;
          position:absolute;
        }
        .button-disabled{
          opacity:0.4;
        }
        .button{
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          width:100%;
          height:100%;
        }
        button{
          outline:none;
          border:none;
        }
        @media all and (max-width: 500px) {
          .name{
            margin-top: 46px !important;
          }
          
        }
        
        .name{
          margin-top:60px;
        }
        .email{
          margin-top:15px;
        }
        .message{
          margin-top:15px;
          margin-bottom:20px;
        }
        .button:hover, .button:focus{
          cursor:pointer;
          background-color:#e6bd32 !important;
          box-shadow: 0 2px 10px 0 rgba(25, 38, 53, 0.3);
          transition: background-color 250ms linear;
        }
        .button{
          width: 144px;
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
      `}</style>
    </div>)
}



export const ContactUs = () => {
  let { fl: { pages: { nodes:[ { pageContent:{ contactUs:{ content }} } ] } }  } = useStaticQuery(
    graphql`
    query ContactUs {
      fl{
        pages(where:{title:"Landing"}){
           nodes{
            title
            pageContent{
               contactUs{
                content
              }
            }
          }
        }
      }
    }
  `)
  const [submittedForm, setSubmittedForm] = useState(false);
  const [displaySentMessage, setDisplaySentMessage] = useState(false);
  console.log(content)
  return (<div className='wrapper centered'>
    <div className='container centered' >
      <div >
        <img className='logo' draggable="false" src={logoImg} alt='logo'></img>
        <div className='title'>
          Let’s work together!
        </div>
        <div className='contact-us-message' dangerouslySetInnerHTML={{__html:content}} ></div>
          {/* We would love to chat about your project. Shoot us an email at <span style={{fontWeight:'600'}} >info@flatironsdevelopment.com</span> or fill out this form, and we will get back to you as soon as possible. */}
        <div className='centered'>
          <div className='form'>
            {submittedForm && <div className={`email-sent ${displaySentMessage? 'fade-in':''}`}>
              <div className='centered' >
                Thanks for contacting us!
              </div>
              <div className='centered'>
                <div className='sent-msg'>
                  We will get back to you as soon as possible.
                </div>
              </div>
            </div>}
            <div className={`${submittedForm? 'hidden-fields':''}`}>
              <Form onSubmit={()=> setSubmittedForm(true)}
                onDisplaySentMessage={()=> setDisplaySentMessage(true)} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .hidden-fields{
        opacity:0;
        pointer-events:none;
      }
      .sent-msg{
        margin-top:10px;
        font-family: Montserrat;
        line-height: 2.22;
        font-weight:normal;
        font-size:18px;
        padding:0 8%;
        color: rgba(7, 22, 56, 0.85);
      }
      .fade-in{
        opacity: 1 !important;
        transition: opacity 1s ease-in-out;
        -moz-transition: opacity 1s ease-in-out;
        -webkit-transition: opacity 1s ease-in-out;
      }
      .email-sent{
        opacity:0;
        height:0px;
        margin-top:150px;
        margin-bottom:-150px;
        font-weight:600;
        font-family: Montserrat;
        font-size: 25px;
        line-height: 2.22;
        color: rgba(7, 22, 56, 0.85);
      }
      .logo{
        margin-top:113px;
      }
      .title{
        font-family: DM Serif Text;
        font-size: 48px;
        line-height: 1.73;
        text-align: center;
        color: #ffffff;
      }
      .contact-us-message{
        margin-top:9px;
        max-width:870px;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 200;
        line-height: 1.9;
        text-align: center;
        color: #d2e8ff;
      }
      @media all and (max-width: 1100px) {
        .contact-us-message{
          max-width:700px !important;
          padding: 0 5% !important;
        }
      }
      
      @media all and (max-width: 650px) {
        .title{
          font-size: 7vw !important; 
          margin-bottom:43px !important;
        }
      }
      
      @media all and (max-width: 500px) {
        .logo{
          margin-top:72px;
        }
        .title{
          font-size:30px !important;
        }
        .form{
          margin-top:40px !important;
          width: 92vw !important;
          padding: 0 4% 42px 4% !important;
        }
      }
      @media all and (max-width: 310px) {
        .form{
          padding: 0 2% 35px 2% !important;
        }
      }
      
      
      .form{
        margin-top:35px;
        width: 452px;
        border-radius: 5px;
        box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.06);
        background-color: #ffffff;
        margin-bottom:74px;
        padding: 0 52px 35px 52px;
      }

      .wrapper:before {
        position: absolute;
        height:200px;
        width:100px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: blue;
      }
      .container{
        width:100%;
        background: url(${backgroundImg}) no-repeat center;
        background-size: cover;
        background-position:left;
      }
      .wrapper{
        background-color: #2a52a9;
      }
    `}</style>
  </div>)
}