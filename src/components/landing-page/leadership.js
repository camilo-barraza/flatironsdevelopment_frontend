import React from 'react'
import { SectionHeader } from "./sectionHeader"
import { useStaticQuery, graphql } from "gatsby"

const Leader = ({profileImage, name, role, description}) => (<div className='wrapper horizontal'>
  <div className='img-container centered'>
    <img className='profile-img' alt='profile-img' src={profileImage.sourceUrl} width="137px" height= "137px"></img>
  </div>
  <div className='leader-info'>
    <div className='name'>
      {name.toUpperCase()}
    </div>  
    <div className='role'>
      {role}
    </div>
    <div className='underline-wrapper'>
      <div className='underline'> </div>
    </div>
    <div className='centered'>
      <div className='description' dangerouslySetInnerHTML={{__html:description}}></div>
    </div>
  </div>
  <style jsx>{`
    @media all and (max-width: 1120px) {
      .wrapper{
        flex-direction: column !important;
      }
      .description{
        margin-left:3% !important;
      }
      .underline-wrapper{
        display: flex ;
        align-items: center ;
        justify-content: center ;
        text-align: center;
      }
      .leader-info{
        margin-left: 0px !important; 
        padding: 0 5%;
        align-items: center ;
        justify-content: center ;
        text-align: center;
        margin-bottom:15px !important;
      }
      .underline{
        margin-top:27px !important;
      }
      .name{
        margin-top:38px !important;
        width:100% !important; 
        display: flex ;
        align-items: center ;
        justify-content: center ;
        text-align: center !important;
        margin-bottom:15px !important;
      }
      .role{
        width:100% !important;
        display: flex ;
        align-items: center ;
        justify-content: center ;
        text-align: center !important;
        font-size: 22px !important
      }
    }
    .img-container{
      margin:0;
      padding:0;
      height:137px;
    }
    .profile-img{
      margin:0; 
      padding:0;
      border-radius:50%;
    }
    .leader-info{
      margin-left:49px;
    }
    .wrapper{
      margin-top:68px;
    }
    .name{
      text-align:left;
      width: 211px;
      height: 19px;
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 1.9px;
      margin-bottom:10px;
      color: #071638;
    }
    .role{
      text-align:left;
      font-family: Montserrat;
      font-size: 32px;
      font-weight: 600;
      color: #071638;
    }
    .underline{
      width: 28px;
      height: 1px;
      border: solid 1.5px #d0a617;
      margin-top:13px;
      margin-left:1px;
      background-color: red;
    }
    .description{
      text-align:left;
      margin:0;
      padding:0;
      margin-top:27px;
      max-width: 719px;
      font-family: Montserrat;
      font-size: 18px;
      line-height: 2.22;
      color: rgba(7, 22, 56, 0.85);
    }
  `}</style>
</div>)

export const Leadership = () =>  {
  let { fl: { pages: { nodes:[ { pageContent: { leadership } } ] } }  } = useStaticQuery(
    graphql`
    query Leadership {
      fl{
        pages(where:{title:"Landing"}){
           nodes{
            title
            pageContent{
              leadership{
                title
                leaders{
                  name
                  role
                  description
                  profileImage{
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (<div className='wrapper centered'>
    <div >
      <div className='section-header'>
        <SectionHeader name='leadership team' title={leadership.title}></SectionHeader>
      </div>
      <div className='leaders'>
        {leadership.leaders.map((leader, index) => (<div key={index}>
          <Leader {...leader} />
        </div>))}
      </div>
    </div>
    <style jsx>{`
      @media all and (max-width: 900px) {
        .section-header{
          margin-bottom:0 !important;
        }
      }
      
      .leaders{
        margin-bottom:155px;
      }
      .section-header{
        margin-top:89px;
        margin-bottom:119px;
      }
      .wrapper{
        object-fit: contain;
        background-image: linear-gradient(to bottom, #f6f9fc, #ffffff);
      }
    `}</style>
  </div>)
}