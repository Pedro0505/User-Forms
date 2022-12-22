import React from 'react';
import './style.css';

function UserIdentification() {
  return (
    <form className="user-identification-form">
      <label htmlFor="name-field">
        <p>Nome</p>
        <input className="text-fields" type="text" name="name" id="name-field" />
      </label>
      <section>
        <div>
          <label htmlFor="password-field">
            <p>Senha</p>
            <input className="text-fields" type="text" name="password" id="password-field" />
          </label>
          <label htmlFor="check-password-field">
            <p>Confirmar Senha</p>
            <input className="text-fields" type="text" name="check-password" id="check-password-field" />
          </label>
        </div>
        <div>
          <label htmlFor="email-field">
            <p>Email</p>
            <input className="text-fields" type="text" name="email" id="email-field" />
          </label>
          <label htmlFor="birthday-field">
            <p>Data de nascimento</p>
            <input className="text-fields" type="text" name="birthday" id="birthday-field" />
          </label>
        </div>
      </section>
      <button className="next-btn next-btn-user-identification" type="submit">Próximo passo</button>
    </form>
  );
}

export default UserIdentification;
