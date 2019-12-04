import React from "react"
import nyt from './assets/clients/the-new-york-times-logo.png'
import ibm from './assets/clients/shape-2.png'
import ups from './assets/clients/ups.png'
import xog from './assets/clients/xoxo-web-1920.png'
import joh from './assets/clients/2000-px-johnsonand-johnson-logo-svg.png'
import amp from './assets/clients/amplify-logo.png'
import fed from './assets/clients/fed-ex-logo.png'
import gus from './assets/clients/group-60.png'
import hac from './assets/clients/hachette-book-group-logo.png'
import sap from './assets/clients/logo-sap-white-34-nuo-34-merfwje-3-s-5-dujnk-1.png'
import pep from './assets/clients/pepsi.png'

export const Clients = () => (<div className='wrapper centered'>
  <div className='card'>
    <div className='title centered'>
      OUR TEAM MEMBERS HAVE BUILT SOFTWARE FOR
    </div>
    <div className='centered'>
      <div className='underline'></div>
    </div>
    <div className='clients'>
      <img alt='logo' className='logo' src={nyt}></img>
      <img alt='logo' className='logo' src={ibm}></img>
      <img alt='logo' className='logo' src={ups}></img>
      <img alt='logo' className='logo' src={xog}></img>
      <img alt='logo' className='logo' src={joh}></img>
      <img alt='logo' className='logo' src={amp}></img>
      <img alt='logo' className='logo' src={fed}></img>
      <img alt='logo' className='logo' src={gus}></img>
      <img alt='logo' className='logo' src={hac}></img>
      <img alt='logo' className='logo' src={sap}></img>
      <img alt='logo' className='logo' src={pep}></img>
    </div>
  </div>
  <style jsx>{`
    .clients{
      margin-top:38px;
    }
    .logo{
      padding: 0px 25px 0px 25px;
    }
    .underline{
      width: 28px;
      height: 1px;
      border: solid 1px #d0a617;
    }
    .wrapper{
      margin-top:-90px;
    }
    .card{
      margin:0 4.5% 0 4.5%;
      background-color: blue;
      width: 1091px;
      padding: 0 0 15px 0;
      border-radius: 5px;
      -webkit-backdrop-filter: blur(18px);
      backdrop-filter: blur(18px);
      box-shadow: 0 2px 30px 0 rgba(7, 22, 56, 0.07);
      background-color: rgba(255, 255, 255, 0.96);
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