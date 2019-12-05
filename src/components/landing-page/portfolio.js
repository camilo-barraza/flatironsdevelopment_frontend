import React from "react"
import { SectionHeader } from "./sectionHeader"

const Project = ({ orientation }) => (<div className='centered'>
  <div className='wrapper horizontal'>
    {orientation === 'right' &&
      <div className='img'>
        <img  src='tattle.png' alt='project-img'></img>
      </div>}
    <div className='project-description'>
      <div className='number-img'>
        <img src='01.png'></img>
      </div>
      <div className='title'>
        Tattle
      </div>
      <div className='underline'></div>
      <div className='content'>
        Tattle is an analytics platform that measures customer’s dining experiences, delivering real-time feedback to their partners in hospitality. Tattle hired me to roll out a new product offering called Snapshots, which generates actionable insights from the data collected to help the general managers, district managers, and executives of restaurant chains focus on improving the areas that matter most to their customers.
      </div>
    </div>
    {orientation === 'left' &&
      <div className='img'>
        <img  src='tattle.png' alt='project-img'></img>
      </div>}
  </div>
  <style jsx>{`
    .number-img{
      height:1px;
      position:absolute;
      margin-top:20px;
      margin-left:-16px;
    }
    .wrapper{
      margin-top:53px;
      margin-left:${orientation === 'left'?'100px;':'-100px'};
    }
    .underline{
      margin-left:2px;
      margin-top:15px;
      margin-bottom:18px;
      width: 28px;
      height: 1px;
      border: solid 1px #d0a617;
    }
    .title{
      margin-top:76px;
      width: 94px;
      height: 39px;
      font-family: Montserrat;
      font-size: 32px;
      font-weight: 600;
      color: #071638;
    }
    .project-description{
      margin: 0 10px;
    }
    .content{
      width:374px;
      text-align:left;
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 300;
      line-height: 2.06;
      color: rgba(7,22, 56, 0.85)
    }
  `}</style>
</div>)

export const Portfolio = () => (<div className='wrapper'>
  <div className='section-header'>
    <SectionHeader name="Portfolio" title="Most Recent Work"></SectionHeader>
  </div>
  <Project orientation="left"></Project>
  <Project orientation="right"></Project>
  <Project orientation="left"></Project>
  <Project orientation="right"></Project>

  <style jsx>{`
    .section-header{
      margin-top:89px;
    }
    .wrapper{
      margin-bottom:191px;
    }
  `}</style>
</div>)