import React from 'react'
import './Widgets.css'
import { FiberManualRecord, Info } from '@mui/icons-material'
const Widgets = () => {
  const newsArticle = (heading, subtitle)=>(
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecord />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
  )
  
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle ("Papa React Is Back ", 'Top-news 9999 readers')}
      {newsArticle ("Papa React Is Back ", 'Top-news 9999 readers')}
      {newsArticle ("Papa React Is Back ", 'Top-news 9999 readers')}
      {newsArticle ("Papa React Is Back ", 'Top-news 9999 readers')}
    </div>
  )
}

export default Widgets