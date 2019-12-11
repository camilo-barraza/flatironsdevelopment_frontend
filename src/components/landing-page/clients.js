import React from "react"
import nyt from './assets/clients/the-new-york-times-logo.svg'
import ibm from './assets/clients/shape-2.svg'
import ups from './assets/clients/ups.svg'
import xog from './assets/clients/xoxo-web-1920.png'
import joh from './assets/clients/2000-px-johnsonand-johnson-logo-svg.svg'
import amp from './assets/clients/amplify-logo.png'
import fed from './assets/clients/fed-ex-logo.svg'
import gus from './assets/clients/group-60.svg'
import hac from './assets/clients/hachette-book-group-logo.svg'
import sap from './assets/clients/logo-sap-white-34-nuo-34-merfwje-3-s-5-dujnk-1.svg'
import pep from './assets/clients/pepsi.svg'

export const Clients = () => (<div id="clients" className='wrapper centered'>
  <div className='card'>
    <div  className='title centered'>
      OUR TEAM MEMBERS HAVE BUILT SOFTWARE FOR
    </div>
    <div className='centered'>
      <div className='underline'></div>
    </div>
  <div className='clients centered wrapped'>
      <div className='img-logo'>
        <img alt='logo' src={nyt}></img>
      </div>
      <div className='img-logo'>
        <img alt='logo' src={ibm}></img>
      </div>
      <div className='img-logo'>
        <img alt='logo' src={ups}></img>
      </div>
      <div className='img-logo'>
        <img alt='logo' src={xog}></img>
      </div>
      <div className='img-logo'>
        <img alt='logo' src={joh}></img>
      </div>
      <div className='img-logo'>
        <img alt='logo' src={amp}></img>
      </div>
      <div className='img-logo'>
        <img alt='logo' src={fed}></img>
      </div>
      <div className='img-logo'>
        <img alt='logo' src={gus}></img>
      </div>
      <div className='img-logo'>
        <img alt='logo' src={hac}></img>
      </div>
      <div className='img-logo'>
        <img alt='logo' src={sap}></img>
      </div>
      <div className='img-logo'>
        <img alt='logo' src={pep}></img>
      </div>
    </div>
  </div>
  <style jsx>{`
    .clients{
      margin-top:19px;
      padding: 0 10%;
    }
    .img-logo img {
      display: block;
      height: auto; 
      margin: auto; 
    }
    .img-logo{
      display: flex ;
      margin:auto;
      align-items: center ;
      justify-content: center ;
      text-align: center;
      width: 129px;
      height: 36px;
      margin: 12.5px 7.5px;
    }
    .underline{
      width: 28px;
      height: 1px;
      border: solid 1px #d0a617;
    }
    .wrapper{
      margin-top:-90px;
    }
    @media all and (max-width: 500px) {
      .clients{
        padding: 0 !important;
        margin-top: 28px !important;
        margin-left: 6px !important; 
        margin-right: 6px !important; 
      }
      .img-logo{
        margin: 7.5px 4px;
      }
      .wrapper{
        margin-top:-18vw;
      }
    }
    
    .card{
      z-index:100;
      margin:0 4.5% 0 4.5%;
      max-width: 1120px;
      padding: 0 0 18px 0;
      border-radius: 5px;
      -webkit-backdrop-filter: blur(18px);
      backdrop-filter: blur(18px);
      box-shadow: 0 2px 30px 0 rgba(7, 22, 56, 0.07);
      background-color: rgba(255, 255, 255);
    }
    .title{
      margin: 44px 8% 5px 8%;
      font-family: Montserrat;
      font-size: 14px;
      letter-spacing: 1.66px;
      text-align: center;
      color: #071638
    }
  `}</style>
</div>)