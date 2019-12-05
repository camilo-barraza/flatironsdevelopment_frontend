import React from 'react'
import backgroundImg from './assets/background-footer.svg'
import logoImg from './assets/logo.svg'
import { useStaticQuery, graphql } from "gatsby"

export const ContactUs = (props) => (<div className='wrapper centered'>
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