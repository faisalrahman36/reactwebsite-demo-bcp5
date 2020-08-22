import React from "react";
import "./App.css";
import news from './News';
import ReadMoreReact from 'read-more-react';
export default function Section({id }) {
  return (
    <div className="ulhorizontal" id={id}>
      {Object.entries(news).map(([slug, { name, img,title,description,source }]) => (
         
          <div key={slug} className="news-section">
            <h2>{name}</h2>
      <p>{title}</p>
      
<br />
            <img src={img} alt={name} className="imagemenu" height="20%" width="20%"/>
        <br /> 
        <ReadMoreReact min="20" max="30" ideal="20" text={description} readMoreText={<strong className="readmore">Read More</strong>} />
        <br /> <a href={source}>Source: {source} </a>    
        </div>
      ))}
    </div>
  );
}
