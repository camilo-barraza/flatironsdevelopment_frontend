import React from "react"
import { SectionHeader } from "./sectionHeader"
import { useStaticQuery, graphql } from "gatsby"

const ProjectImg = ({ src }) => (<div className='wrapper centered'>
    <img className='img' src={src} alt='project-img'></img>
    <style jsx>{`
      .img{
        margin-left:7px;
        margin-top:20px;
      }
      .wrapper{
        margin-left:68px;
        margin-right:68px;
      }
    `}</style>
</div>)

const Project = ({ orientation, numberedImage, project, description, projectImage }) => (<div className='centered'>
  <div className='wrapper horizontal'>
    {orientation === 'right' &&  <ProjectImg src={projectImage.sourceUrl}></ProjectImg>}
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
    {orientation === 'left' && <ProjectImg src={projectImage.sourceUrl}></ProjectImg>} 
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
  return (<div className='wrapper'>
    <div className='section-header'>
      <SectionHeader name="Portfolio" title="Most Recent Work"></SectionHeader>
    </div>
    <div className='projects'>
      {mostRecentWork.map((project, index) => (<div key={index}>
        <Project {...project} orientation={index%2 === 0? 'left': 'right'} />
      </div>))}
    </div>
    <style jsx>{`
      .projects{
        margin-top:-74px;
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