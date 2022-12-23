import React from 'react';
import './style.css';

function ShowUserModal() {
  return (
    <section className="show-user-modal-container">
      <h1>Usuário criado!</h1>
      <section className="name-email-show-user-container">
        <div className="show-user-name">
          <p className="field-description">Nome</p>
          <p className="user-info-fields">Marcos Gênesis</p>
        </div>
        <div className="show-user-email">
          <p className="field-description">Email</p>
          <p className="user-info-fields">emailteste@gamil.com</p>
        </div>
      </section>
      <section className="street-cep-house-number-container">
        <div>
          <div className="show-user-street">
            <p className="field-description">Rua</p>
            <p className="user-info-fields">Rua tal tal</p>
          </div>
          <div className="show-user-cep">
            <p className="field-description">CEP</p>
            <p className="user-info-fields">0000-000</p>
          </div>
        </div>
        <div className="show-user-house-number">
          <p className="field-description">Número</p>
          <p className="user-info-fields">121</p>
        </div>
      </section>
      <button type="button" className="btn-new-user">Novo usuário</button>
    </section>
  );
}

export default ShowUserModal;
