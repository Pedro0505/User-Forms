import React from 'react';
import './style.css';

function UserAbout() {
  return (
    <form className="user-about-form">
      <div className="about-text-area-container">
        <label htmlFor="about-text-area-field">
          <p>Nos conste mais sobre você</p>
          <textarea className="about-text-area-input" name="" id="" />
        </label>
      </div>
      <div className="next-previous-btn-about-container">
        <button className="previous-btn previous-btn-about" type="submit">Anterior</button>
        <button className="next-btn next-btn-about" type="submit">Próximo passo</button>
      </div>
    </form>
  );
}

export default UserAbout;
