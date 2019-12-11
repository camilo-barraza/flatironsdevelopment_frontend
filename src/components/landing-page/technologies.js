import React from "react"
import { SectionHeader } from "./sectionHeader"
import reactImg from './assets/technologies/react.png'
import nodeImg from './assets/technologies/node.png'
import vueImg from './assets/technologies/vue.png'
import railsImg from './assets/technologies/rails.png'
import angularImg from './assets/technologies/angular.png'
import phpImg from './assets/technologies/php.png'
import wordpressImg from './assets/technologies/wordpress.png'
import iosImg from './assets/technologies/ios.png'
import androidImg from './assets/technologies/android.png'


const Tool = ({src, name}) => (<div className='wrapper centered'>
  <div >
    <div className='image'>
      <img src={src} alt='tool'></img>
    </div>
    <div className='name'>
      {name.toUpperCase()}
    </div>
  </div>
  <style jsx>{`
    .image{
      margin-top:17px;
      margin-bottom:15px;
      height:54px;
    }
    img{
      max-height:54px;
    }
    .name{
      white-space: nowrap;
      overflow: hidden;
      margin-top:35px;
      opacity: 0.8;
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 600;
      color: #ffffff;
    }
    @media all and (max-width: 400px) {
      .name{
        font-size:4.5vw;
      }
    }
    
    @media all and (max-width: 500px) {
      .wrapper{
        margin: 7px 7px !important;
        width:44vw !important;
        padding: 0 10px !important;
      }
      img{
        height: 42px !important; 
        max-height:42px !important;
      }
    }
    
    .wrapper{
      width: 189px;
      height: 186px;
      border-radius: 5px;
      background-color: #1e3f84;
      margin: 14px 14px;
    }
  `}</style>
</div>)

export const Technologies = () => {
  return  (<div className='wrapper'>
    <div className='section-header'>
      <SectionHeader color='white' name="Technologies" title="Our Development Skillset"></SectionHeader>
    </div>
    <div className='centered'>
      <div className='tools centered wrapped'>
        <Tool name ='React' src={reactImg} ></Tool>
        <Tool name ='React Native' src={reactImg} ></Tool>
        <Tool name ='Node' src={nodeImg} ></Tool>
        <Tool name ='vue.js' src={vueImg} ></Tool>
        <Tool name ='ruby on rails' src={railsImg} ></Tool>
        <Tool name ='angular' src={angularImg} ></Tool>
        <Tool name ='php' src={phpImg} ></Tool>
        <Tool name ='wordpress' src={wordpressImg} ></Tool>
        <Tool name ='ios' src={iosImg} ></Tool>
        <Tool name ='android' src={androidImg} ></Tool>
      </div>
    </div>
    <style jsx>{`
      @media all and (max-width: 900px) {
        .tools{
          margin-top:49px !important;
        }
        .wrapper{
          padding-top:74px !important;
        }
        .tools{
          padding-bottom:78px !important;
        }
      }
      
      .tools{
        margin:0;
        margin-top:89px;
        padding-bottom:180px;
        max-width:1160px;
      }
      .wrapper{
        padding-top:120px;
        background-color: #002a78;
      }
    `}</style>
  </div>)
}
