import React  from "react"
import logoImg from './assets/white-logo.svg'
import { useMenuItems } from "../../content-hooks/landing-page/useMenuItems"

export const Footer = () => {
  let menuItems = useMenuItems('Landing Page')
  return (<div className='wrapper centered'>
    <div className='container'>
      <div className='logo-desktop centered'>
        <img draggable="false" src={logoImg} alt='logo'></img>
        <div className='copyright'>
          © 2019
        </div>
      </div>
      <div className='menu-wrapper centered'>
        <div className='menu'>
          {menuItems.map((menuItem, index) => (<div key={index}>
            <div className='menu-item'>
              <a href={menuItem.node.url}> {menuItem.node.label} </a>
            </div>
          </div>))}
        </div>
      </div>
      <div className='logo-mobile centered'>
        <img draggable="false" src={logoImg} alt='logo'></img>
        <div className='copyright'>
          © 2019
        </div>
      </div>
    </div>
    <style jsx>{`
      a{
        text-decoration:none;
      }
      a:hover{
        opacity:0.7;
      }
      img{
        margin:0;
      }
      .container{
        width:80%;
        max-width:1300px;
        padding:37px 0;
        display: flex ;
        justify-content: space-between ;
      }
      .copyright{
        margin-top:4.7px;
        margin-left:21px; 
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 200;
        line-height: 2.06;
        color: rgba(255, 255, 255, 0.85);
      }
      .wrapper{
        background-color: #2a52a9;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      .logo-mobile{
        display: flex ;
        flex-direction: column;
        display:none ;
        margin-top: 40px; 
      }
      @media all and (max-width: 1200px) {
        .logo-mobile{
          display: block ;
        }
        .copyright{
          margin-left:0 !important; 
        }
        .logo-desktop{
          display: none; 
        }
        .menu{
          flex-direction: column !important;
        }
        .menu-item{
          margin: 0 !important; 
          margin-top: 21px !important; 
        }
        .container{
          padding-top:9px !important;
          padding-bottom:25px !important;
          display: flex !important ;
          flex-direction: column !important;
        }
      }
      
      .menu-item{
        margin-right:24px;
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 500;
        color: #d0e9f8;
      }
      .menu{
        display: flex ;
        flex-direction: row;
      }
    `}</style>
  </div>)
}