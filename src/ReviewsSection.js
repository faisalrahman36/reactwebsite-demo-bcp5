import React from "react";
import "./App.css";
import reviews from './Reviews';
import ReadMoreReact from 'read-more-react';
export default function ReviewsSection({id }) {
  return (
    <div className="ulhorizontal" id={id}>
      {Object.entries(reviews).map(([slug, { name, img,title,description,source }]) => (
         
          <div key={slug} className="news-section">
            <h2>{name}</h2>
      <p>{title}</p>
      
<br />
            <img src={img} alt={name} className="imagemenu" height="20%" width="20%"/>
        <br /> 
        <ReadMoreReact min="20" max="30" ideal="20" text={description} readMoreText={<strong className="readmore">Read More</strong>} />
        <br /> <strong>Read complete at </strong> <a href={source}>: {source} </a>    
        </div>
      ))}
    </div>
  );
}
