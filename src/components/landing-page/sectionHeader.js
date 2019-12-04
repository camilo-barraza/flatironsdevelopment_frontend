import React from "react"

export const SectionHeader  = ({name, title, color}) => (<div className='centered'>
  <div >
    <div className='sectionName'>
      {name.toUpperCase()}
    </div>
    <div className='centered'>
      <div className='underline'></div>
    </div>
    <div className='title'>
      {title}
    </div>
  </div>
  <style jsx>{`
    .underline{
      width: 28px;
      height: 1px;
      border: solid 1px #d0a617;
    }
    .sectionName{
      margin-bottom: 5px;
      font-family: Montserrat;
      font-size: 14px;
      letter-spacing: 1.66px;
      text-align: center;
      color: ${color? color : '#071638'};
    }
    .title{
      font-family: DM Serif Text;
      font-size: 48px;
      line-height: 1.65;
      text-align: center;
      color: ${color? color : '#071638'}
    }
  `}</style>
</div>)