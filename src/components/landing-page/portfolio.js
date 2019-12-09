import React from "react"
import { SectionHeader } from "./sectionHeader"
import { useStaticQuery, graphql } from "gatsby"

const ProjectImg = ({ src }) => (<div className='wrapper'>
    <img className='img' src={src} alt='project-img'></img>
    <style jsx>{`
      .img{
        margin-left:7px;
        margin-top:20px;
        -webkit-filter: drop-shadow(3px -3px 30px rgb(15, 122, 145, 0.09)); 
        filter: drop-shadow(3px -3px 30px rgb(15, 122, 145, 0.09)); 
      }
      @media all and (max-width: 1200px) {
        .img{
          margin:0;
          -webkit-filter: drop-shadow(2px -2px 10px rgb(15, 122, 145, 0.09)); 
          filter: drop-shadow(2px -2px 10px rgb(15, 122, 145, 0.09)); 
        }
        .wrapper{
          margin: 0 5% !important;
        }
      }
      
      .wrapper{
        margin-left:68px;
        margin-right:68px;
      }
    `}</style>
</div>)

const Project = ({ orientation, numberedImage, project, description, projectImage }) => (<div className='centered'>
  <div className='wrapper'>
    <div className='project-img-right'>
      <ProjectImg src={projectImage.sourceUrl}></ProjectImg>
    </div>
    <div className='project-description-container centered'>
      <div className='project-description'>
        <div className='number-img'>
          <img alt='numbered-img' src={numberedImage.sourceUrl}></img>
        </div>
        <div className='title'>
          {project}
        </div>
        <div className='underline'></div>
        <div className='content' dangerouslySetInnerHTML={{__html:description}}></div>
      </div>
    </div>
    <div className='project-img-left'>
      <ProjectImg src={projectImage.sourceUrl}></ProjectImg>
    </div>
  </div>
  <style jsx>{`
    .number-img{
      height:1px;
      position:absolute;
      margin-top:20px;
      margin-left:-16px;
    }
    .wrapper{
      margin-top:125px;
      margin-left:${orientation === 'left'?'100px;':'-100px'};
      display: flex !important;
      flex-direction: row !important;
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
      text-align:left;
      height: 39px;
      font-family: Montserrat;
      font-size: 32px;
      font-weight: 600;
      color: #071638;
    }
    .project-description{
      margin: 0 10px;
    }
    @media all and (max-width: 1200px) {
      .project-description{
        width: 60vw !important;
        margin: 0 10% !important;
      }
      .content{
        max-width:1200px !important;
        margin:0 !important; 
        padding:0 !important;
        font-size:18px !important;
      }
      .project-img-right{
        display:none;
      }
      .wrapper{
        margin-top: 62px !important;
        display: flex !important;
        flex-direction: column !important;
        margin-left:0 !important;
      }
      .project-img-left {
        margin-top: 20px !important; 
        display: block !important;
      }
    }
    @media all and (max-width: 900px) {
      .project-description{
        width: 80vw !important;
      }
    }
    @media all and (max-width: 600px) {
      .project-description{
        width: 100vw !important;
      }
    }
    
    .project-img-left {
      display: ${orientation === 'right' ? 'none' : 'auto'} ;
    }
    .project-img-right {
      display: ${orientation === 'left' ? 'none' : 'auto'} ;
    }
    .content{
      max-width:374px;
      text-align:left;
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 300;
      line-height: 2.06;
      color: rgba(7,22, 56, 0.85)
    }
  `}</style>
</div>)

export const Portfolio = () => {
  let { fl: { pages: { nodes:[ { pageContent: { mostRecentWork } } ] } }  } = useStaticQuery(
    graphql`
    query MostRecentWork {
      fl{
        pages(where:{title:"Landing"}){
           nodes{
            title
            pageContent{
              mostRecentWork{
                numberedImage{
                  sourceUrl
                }
                project
                description
                projectImage {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  `)
  return (<div className='wrapper centered'>
    <div className='container'>
      <div className='section-header'>
        <SectionHeader name="Portfolio" title="Most Recent Work"></SectionHeader>
      </div>
      <div className='projects'>
        {mostRecentWork.map((project, index) => (<div key={index}>
          <Project {...project} orientation={index%2 === 0? 'left': 'right'} />
        </div>))}
      </div>
    </div>
    <style jsx>{`
      .projects{
        margin-top:-74px;
      }
      .container{
        max-width:1200px;
      }
      @media all and (max-width: 1200px) {
        .section-header{
          margin-bottom: 47px !important;
        }
        .wrapper{
          margin-bottom: 100px !important;
        }
      }
      
      @media all and (max-width: 500px) {
        .section-header{
          margin-top: 73px !important;
        }
      }
      
      .section-header{
        margin-top:89px;
      }
      .wrapper{
        margin-bottom:191px;
      }
    `}</style>
  </div>)
}