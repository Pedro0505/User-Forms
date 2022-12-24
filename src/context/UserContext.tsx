import React, { createContext, useState } from 'react';
import IUserAddress from './interfaces/IUserAddress';
import IUserContextProps from './interfaces/IUserContextProps';
import IUserContextType from './interfaces/IUserContextType';
import IUserInfo from './interfaces/IUserInfo';

const initialValue = {
  userInfo: {
    name: '',
    email: '',
  },
  userAddress: {
    street: '',
    houseNumber: '',
    cep: '',
  },
  storeUserInfo: () => {},
  storeUserAddress: () => {},
};

export const UserContext = createContext<IUserContextType>(initialValue);

export const UserProvider = ({ children }: IUserContextProps) => {
  const [userInfo, setUserInfo] = useState<IUserInfo>(initialValue.userInfo);
  const [userAddress, setUserAddress] = useState<IUserAddress>(initialValue.userAddress);

  const storeUserInfo = (info: IUserInfo) => {
    setUserInfo(info);
  };

  const storeUserAddress = (address: IUserAddress) => {
    setUserAddress(address);
  };

  const context = {
    userInfo,
    userAddress,
    storeUserInfo,
    storeUserAddress,
  };

  return (
    <UserContext.Provider value={ context }>
      { children }
    </UserContext.Provider>
  );
};
