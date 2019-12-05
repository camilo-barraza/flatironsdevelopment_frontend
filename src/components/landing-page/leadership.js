import React, { Component } from 'react'
import { SectionHeader } from "./sectionHeader"
import { useStaticQuery, graphql } from "gatsby"

const Leader = (props) => (<div className='wrapper horizontal'>
  <img className='profile-img' src='mike.png' width="137px" height= "137px"></img>
  <div className='leader-info'>
    <div className='name'>
      Michael Frederick
    </div>  
    <div className='role'>
      Chief Executive Officer
    </div>
    <div className='underline'> </div>
    <div className='description'>
      Michael has 17+ years of experience building and managing software with projects ranging from startup MVP development to managing complex systems for Fortune 500 companies. Michael is passionate about eliminating waste in the software development ecosystem, and he started Flatirons Development with the mission of improving the efficiency and quality of product development.
    </div>
  </div>
  <style jsx>{`
    .profile-img{
      border-radius:50%;
    }
    .leader-info{

    }
    .name{
      width: 211px;
      height: 19px;
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 1.9px;
      color: var(--dark-indigo);

    }
    .role{

    }
    .underline{
      
    }
    .description{
      width: 719px;
      font-family: Montserrat;
      font-size: 18px;
      line-height: 2.22;
      color: rgba(7, 22, 56, 0.85);
    }
  `}</style>
</div>)

export const Leadership = (props) => (<div className='wrapper centered'>
  <div >
    <div className='section-header'>
      <SectionHeader name='leadership' title='Our leadership team works directly with you'></SectionHeader>
    </div>
    <div >
      <Leader></Leader>
    </div>
  </div>
  <style jsx>{`
    .section-header{
      margin-top:89px;
    }
    .wrapper{
      object-fit: contain;
      background-image: linear-gradient(to bottom, #f6f9fc, #ffffff);
    }
  `}</style>
</div>)