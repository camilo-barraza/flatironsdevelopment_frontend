import React from "react"

export const SectionHeader  = ({name, title, color}) => (<div className='centered'>
  <div className='container'>
    <div className='section-name'>
      {name.toUpperCase()}
    </div>
    <div className='centered'>
      <div className='underline'></div>
    </div>
    <div className='centered'>
      <div className='title'>
        {title}
      </div>
    </div>
  </div>
  <style jsx>{`
    .underline{
      width: 28px;
      height: 1px;
      border: solid 1px #d0a617;
    }
    .section-name{
      margin-bottom: 5px;
      font-family: Montserrat;
      font-size: 14px;
      letter-spacing: 1.66px;
      text-align: center;
      color: ${color? color : '#071638'};
    }
    @media all and (max-width: 900px) {
      .title{
        margin-top: 2vw !important;
        font-size:38px !important;
      }
    }
    
    @media all and (max-width: 500px) {
      .section-name{
        font-size:12px !important;
      }
      .title{
        font-size:32px !important;
        padding:0 !important;
        margin:0 7% !important;
        margin-top: 12px !important;
        line-height:1.44 !important;

      }
    }
    .container{
      width:100%;
    }

    .title{
      margin:0 13% 0 13%;
      font-family: DM Serif Text;
      font-size: 48px;
      line-height: 1.65;
      text-align: center;
      max-width:800px;
      color: ${color? color : '#071638'}
    }
  `}</style>
</div>)