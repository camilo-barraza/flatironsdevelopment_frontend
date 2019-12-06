import React  from "react"
import logoImg from './assets/white-logo.svg'
import { useMenuItems } from "../../content-hooks/landing-page/useMenuItems"

export const Footer = (props) => {
  let menuItems = useMenuItems('Landing Page')
  return (<div className='wrapper centered'>
    <div className='container space-between'>
      <div className='logo-wrapper centered'>
        <img draggable="false" src={logoImg} alt='logo'></img>
        <div className='copyright'>
          ©2019
        </div>
      </div>
      <div className='menu-wrapper centered'>
        <div className='menu horizontal'>
          {menuItems.map((menuItem, index) => (<div key={index}>
            <div className='menu-item'>
              <a href={menuItem.node.url}> {menuItem.node.label} </a>
            </div>
          </div>))}
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
        width:1200px;
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
        background-color: #2a52a9;
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
      .menu{

      }
    `}</style>
  </div>)
}