import React, { useContext } from 'react';
import { RiFileTextFill, RiHome4Fill, RiUser5Fill } from 'react-icons/ri';
import { UserContext } from '../../context/UserContext';
import UserAbout from '../UserAbout/UserAbout';
import UserAddress from '../UserAddress/UserAddress';
import UserIdentification from '../UserIdentification/UserIdentification';
import './style.css';

function UserForm() {
  const { section } = useContext(UserContext);

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
      {
        {
          info: <UserIdentification />,
          address: <UserAddress />,
          about: <UserAbout />,
        }[section]
      }
    </main>
  );
}

export default UserForm;
