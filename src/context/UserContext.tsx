import React, { createContext, useState } from 'react';
import ISectionTypes from './interfaces/ISectionTypes';
import IUserAddress from './interfaces/IUserAddress';
import IUserContextProps from './interfaces/IUserContextProps';
import IUserContextType from './interfaces/IUserContextType';
import IUserInfo from './interfaces/IUserInfo';

const initialValue: IUserContextType = {
  userInfo: {
    name: '',
    email: '',
  },
  userAddress: {
    street: '',
    houseNumber: '',
    cep: '',
  },
  section: 'info',
  handleSection: () => {},
  storeUserInfo: () => {},
  storeUserAddress: () => {},
};

export const UserContext = createContext<IUserContextType>(initialValue);

export const UserProvider = ({ children }: IUserContextProps) => {
  const [userInfo, setUserInfo] = useState<IUserInfo>(initialValue.userInfo);
  const [userAddress, setUserAddress] = useState<IUserAddress>(initialValue.userAddress);
  const [section, setSection] = useState<ISectionTypes>('info');

  const storeUserInfo = (info: IUserInfo) => {
    setUserInfo(info);
  };

  const storeUserAddress = (address: IUserAddress) => {
    setUserAddress(address);
  };

  const handleSection = (sections: ISectionTypes) => {
    setSection(sections);
  };

  const context = {
    userInfo,
    userAddress,
    section,
    storeUserInfo,
    storeUserAddress,
    handleSection,
  };

  return (
    <UserContext.Provider value={ context }>
      { children }
    </UserContext.Provider>
  );
};
