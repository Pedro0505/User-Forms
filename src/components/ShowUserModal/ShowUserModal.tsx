import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './style.css';

function ShowUserModal() {
  const { userAddress, userInfo, handleSection, resetUserInfos } = useContext(UserContext);
  const navigate = useNavigate();

  const handleNewUser = () => {
    resetUserInfos();
    handleSection('info');
    navigate('/');
  };

  return (
    <section className="show-user-modal-container">
      <h1>Usuário criado!</h1>
      <section className="name-email-show-user-container">
        <div className="show-user-name">
          <p className="field-description">Nome</p>
          <p className="user-info-fields">{userInfo.name}</p>
        </div>
        <div className="show-user-email">
          <p className="field-description">Email</p>
          <p className="user-info-fields">{userInfo.email}</p>
        </div>
      </section>
      <section className="street-cep-house-number-container">
        <div>
          <div className="show-user-street">
            <p className="field-description">Rua</p>
            <p className="user-info-fields">{userAddress.street}</p>
          </div>
          <div className="show-user-cep">
            <p className="field-description">CEP</p>
            <p className="user-info-fields">{userAddress.cep}</p>
          </div>
        </div>
        <div className="show-user-house-number">
          <p className="field-description">Número</p>
          <p className="user-info-fields">{userAddress.houseNumber}</p>
        </div>
      </section>
      <button type="button" className="btn-new-user" onClick={handleNewUser}>Novo usuário</button>
    </section>
  );
}

export default ShowUserModal;
