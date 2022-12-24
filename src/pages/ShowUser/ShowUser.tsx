import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ShowUserModal from '../../components/ShowUserModal/ShowUserModal';
import { UserContext } from '../../context/UserContext';
import './style.css';

function ShowUser() {
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo.name === '') {
      navigate('/');
    }
  });

  return (
    <main className="show-user-main">
      <ShowUserModal />
    </main>
  );
}

export default ShowUser;
