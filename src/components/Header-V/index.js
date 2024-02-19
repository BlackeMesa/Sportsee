import React from 'react'
import "./styles.scss";
function HeaderV() {
  return (
    <section className="header-V">
      <div className="img-container">
        <div className="bloc-img">
          <img src="./img/yoga.png" alt="yoga" />
        </div>
        <div className="bloc-img">
          <img src="./img/natation.png" alt="natation" />
        </div>
        <div className="bloc-img">
          <img src="./img/velo.png" alt="velo" />
        </div>
        <div className="bloc-img">
          <img src="./img/haltere.png" alt="haltere" />
        </div>
      </div>
      <div className='container-copyright'>
        <small>Copyright, SportSee 2024</small>
      </div>
    </section>
  );
}

export default HeaderV