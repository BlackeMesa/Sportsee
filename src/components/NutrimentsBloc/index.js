import React from 'react'
import "./styles.scss";
function index({data ,name, units, imgName}) {
    
    
  return (
    <div className="container-nutriment">
      <div className="bloc-nutriment">
        <div>
          <img className={`${imgName}`} src={`./img/${imgName}.png`} alt={imgName} />
        </div>
        <div className="info">
          <p>
            {data}
            {units}
          </p>
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
}

export default index