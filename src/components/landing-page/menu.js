import { useMenuItems } from "../../content-hooks/landing-page/useMenuItems"
import logoImg from './assets/white-logo.svg'
import mobileLogoImg from './assets/mobile-logo.png'
import React  from "react"
 
export const Menu = () => {
  let menuItems = useMenuItems('Landing Page')
  return (<div className='wrapper centered'>
    <div className='container space-between'>
      <div className='logo-wrapper desktop-logo centered'>
        <img draggable="false" src={logoImg} alt='logo'></img>
      </div>
      <div className='logo-wrapper mobile-logo centered'>
        <img draggable="false" src={mobileLogoImg} alt='logo'></img>
      </div>
      <div className='menu-wrapper desktop-menu centered'>
        <div className='menu horizontal'>
          {menuItems.map((menuItem, index) => (<div key={index}>
            <div className='menu-item'>
              <a href={menuItem.node.url}> {menuItem.node.label} </a>
            </div>
          </div>))}
        </div>
      </div>
      <div className='menu-wrapper mobile-menu centered'>
        <div className='menu horizontal'>
          <div className='menu-item'>
            <a href={menuItems[menuItems.length-1].node.url}> {menuItems[menuItems.length-1].node.label} </a>
          </div>
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
      @media all and (max-width: 1600px) {
        .container{
          width:97% !important;
        }
      }
      
      @media all and (max-width: 920px) {
        .mobile-logo {
          display:flex !important;
        }
        .desktop-logo{
          display:none !important;
        }
        .desktop-menu{
          margin-top:-2vw !important;
        }
      }
      @media all and (max-width: 750px) {
        .mobile-menu{
          margin-top:-3vw;
          display:flex !important;
        }
        .desktop-menu{
          display:none !important;
        }
      }
      @media all and (max-width: 500px) {
        .container{
          margin-top:12vw !important;
        }
        .mobile-menu{
          margin-right:-2%;
        }
        .mobile-logo{
          margin-left:4% !important;
        }
        .mobile-logo img{
          height:24px !important;
        }
      }
      
      .mobile-menu{
        display:none;
        font-weight:500;
      }
      .desktop-logo{
        margin-left:1%;
      }
      .mobile-logo{
        margin-left:1%;
        margin-top:-10px;
        display:none;
      }
      .mobile-logo img{
        margin-left:1vw;
        height:5vw;
      }
      .container{
        margin-top:50px;
        width:80%;
        max-width:1300px;
        pointer-events:all;
        position:absolute;
        z-index:100;
        padding:37px 0;
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
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      .menu-item{
        margin-right:24px;
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 500;
        color: #d0e9f8;
      }
    `}</style>
  </div>)
} 