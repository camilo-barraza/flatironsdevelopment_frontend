import React, { Component, useState } from 'react'
import backgroundImg from './assets/background-footer.svg'
import logoImg from './assets/logo.svg'
import { Formik } from 'formik'
import * as Yup from 'yup'
import TextArea from '../utils/TextArea'
import TextField from '../utils/TextField'

let ContactUsSchema = Yup.object().shape({ 
  name: Yup.string()
    .min(1, 'Too Short!')
    .required('Required'),
  email: Yup.string()
    .min(1, 'Too Short!')
    .required('Required'),
  message: Yup.string()
    .min(5, 'Too Short!')
    .required('Required')
})

var sleep = n => new Promise(resolve => setTimeout(resolve, n))

class Form extends Component {
  render() {
    return (<div>
       <Formik
          initialValues={{
            name:'',
            email:'',
            message:''
          }}
          validationSchema={ContactUsSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await sleep(1000)
            this.props.onSubmit()
            await sleep(10)
            this.props.onDisplaySentMessage()
            console.log(values)
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
                width='78%' 
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
                width='78%' 
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
                width='78%' 
                type='text' 
                value={values.message}
                label='How can we Help you?' />
            </div>
            <div >
              <div className='centered' >
                <button className={`button centered ${isSubmitting? 'button-disabled':''}`} disabled={isSubmitting} > Send </button>
              </div>
            </div>
          </form>
          )}
      </Formik> 
      <style jsx>{`
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
}



export const ContactUs = () => {
  const [submittedForm, setSubmittedForm] = useState(false);
  const [displaySentMessage, setDisplaySentMessage] = useState(false);
  return (<div className='wrapper centered'>
    <div className='container centered' >
      <div >
        <img className='logo' src={logoImg} alt='logo'></img>
        <div className='title'>
          Let’s work togehter!
        </div>
        <div className='message'>
          We would love to chat about your project. Shoot us an email at <span style={{fontWeight:'600'}} >info@flatironsdevelopment.com</span> or fill out this form, and we will get back to you as soon as possible.
        </div>
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
            <div style={{opacity:`${submittedForm? 0:1}`}}>
              <Form onSubmit={()=> setSubmittedForm(true)} onDisplaySentMessage={()=> setDisplaySentMessage(true)} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .sent-msg{
        margin-top:10px;
        font-family: Montserrat;
        line-height: 2.22;
        font-weight:normal;
        width:300px;
        font-size:18px;
        color: rgba(7, 22, 56, 0.85);
      }
      .fade-in{
        opacity: 1 !important;
        transition: opacity 1.5s ease-in-out;
        -moz-transition: opacity 1.5s ease-in-out;
        -webkit-transition: opacity 1.5s ease-in-out;
      }
      .email-sent{
        opacity:0;
        position:absolute;
        width:452px;
        margin-top:150px;
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
      .message{
        margin-top:9px;
        width:870px;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 200;
        line-height: 1.83;
        text-align: center;
        color: #d2e8ff;
      }
      .form{
        margin-top:60px;
        width: 452px;
        border-radius: 5px;
        box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.06);
        background-color: #ffffff;
        margin-bottom:74px;
        padding-bottom:35px;
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