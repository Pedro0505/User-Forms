import React from 'react';
import './style.css';

function UserAddress() {
  return (
    <form className="user-address-form">
      <div className="cep-street-field">
        <label htmlFor="cep-field">
          <p>CEP</p>
          <input className="text-fields" type="text" name="cep" id="cep-field" />
        </label>
        <label htmlFor="street-field">
          <p>Rua</p>
          <input className="text-fields" type="text" name="street" id="street-field" />
        </label>
      </div>
      <section className="house-number-district-city-field">
        <div className="house-number-district-field">
          <label htmlFor="house-number-field">
            <p>Número</p>
            <input
              className="text-fields"
              type="text"
              name="house-number"
              id="house-number-field"
            />
          </label>
          <label htmlFor="district-field">
            <p>Bairro</p>
            <input className="text-fields" type="text" name="district" id="district-field" />
          </label>
        </div>
        <div className="city-container">
          <label htmlFor="city-field">
            <p>Cidade</p>
            <input className="text-fields" type="text" name="city" id="city-field" />
          </label>
        </div>
      </section>
      <div className="reference-field-container">
        <label htmlFor="reference-field">
          <p>Ponto de Referência</p>
          <input className="text-fields" type="text" name="reference" id="reference-field" />
        </label>
      </div>
      <div className="next-previous-btn-address-container">
        <button className="previous-btn previous-btn-address" type="submit">Anterior</button>
        <button className="next-btn next-btn-address" type="submit">Próximo passo</button>
      </div>
    </form>
  );
}

export default UserAddress;
