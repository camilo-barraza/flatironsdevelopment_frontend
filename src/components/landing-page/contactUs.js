import React, { Component } from 'react'
import backgroundImg from './assets/background-footer.svg'
import logoImg from './assets/logo.svg'
import { Formik } from 'formik'
import * as Yup from 'yup'
import TextArea from '../utils/TextArea'

class Form extends Component {
  validateForm (values) {
    return {}
  }

  render() {
    return (<div>
       <Formik
          initialValues={{
            message:''
          }}
          validate={this.validateForm.bind(this)}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values)
          }}
        >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, 
          setFieldValue, setFieldTouched, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className='message'>
              <TextArea 
                name='message'
                errorMsg={errors.message}
                touched={touched.message}
                onChange={handleChange}
                onBlur={handleBlur} 
                width='75%' 
                type='text' 
                value={values.message}
                label='How can we Help you?' />
            </div>
            <div >
              <div className='centered' >
                <button className='button centered'> Send </button>
              </div>
            </div>
          </form>
          )}
      </Formik> 
      <style jsx>{`
        .button{
          width:100%;
          height:100%;
        }
        button{
          outline:none;
          border:none;
        }
        .message{
          margin-top:50px;
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

export const ContactUs = () => (<div className='wrapper centered'>
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
          <Form></Form>
        </div>
      </div>
    </div>
  </div>
  <style jsx>{`
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
      height: 501px;
      border-radius: 5px;
      box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.06);
      background-color: #ffffff;
      margin-bottom:74px;
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