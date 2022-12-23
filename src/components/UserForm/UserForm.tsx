import React from 'react';
import { RiFileTextFill, RiHome4Fill, RiUser5Fill } from 'react-icons/ri';
import UserAddress from '../UserAddress/UserAddress';
import './style.css';

function UserForm() {
  return (
    <main className="user-form-main">
      <h1>Criação de usuário</h1>
      <div className="icons-group">
        <span>
          <div>
            <RiUser5Fill fontSize="25px" />
          </div>
          <p>Identificação do Usuário</p>
        </span>
        <span>
          <div>
            <RiHome4Fill fontSize="25px" />
          </div>
          <p>Endereço do Usuário</p>
        </span>
        <span>
          <div>
            <RiFileTextFill fontSize="25px" />
          </div>
          <p>Sobre Você</p>
        </span>
      </div>
      <UserAddress />
    </main>
  );
}

export default UserForm;
