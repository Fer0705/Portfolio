import React from "react";

export const Card = ({ title, description, imgUrl, link }) => {
  return (
    <div className="wrapper">
      {/* <div className="card-content"> */}
      <div className="one">
        <span /* style={{ fontSize: "4rem" }} */ className="title"> {title} </span>
        <div>
          <img className="photo-p" src={imgUrl} alt="app"  /* style={{ width:"1200px", height:"500px" }} */  />
        </div>
      </div>
        <div className="two">
          <div>
            <a href={link} target="_blank" rel="noreferrer">
              <button className="deploy">Ver Proyecto</button>
            </a>
          </div>
          <p style={{ fontSize: "1.5rem" }}>{description}</p>
        </div>
        <br/>
        <br/>
    </div>
  );
};
