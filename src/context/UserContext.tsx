import React, { createContext, useState } from 'react';
import ISectionTypes from './interfaces/ISectionTypes';
import IUserAbout from './interfaces/IUserAbout';
import IUserAddress from './interfaces/IUserAddress';
import IUserContextProps from './interfaces/IUserContextProps';
import IUserContextType from './interfaces/IUserContextType';
import IUserInfo from './interfaces/IUserInfo';

const initialValue: IUserContextType = {
  userInfo: {
    name: '',
    email: '',
    birthday: '',
    checkPassword: '',
    password: '',
  },
  userAddress: {
    street: '',
    houseNumber: '',
    cep: '',
    city: '',
    district: '',
    reference: '',
  },
  userAbout: {
    about: '',
  },
  section: 'info',
  handleSection: () => {},
  storeUserInfo: () => {},
  storeUserAddress: () => {},
  storeUserAbout: () => {},
};

export const UserContext = createContext<IUserContextType>(initialValue);

export const UserProvider = ({ children }: IUserContextProps) => {
  const [userInfo, setUserInfo] = useState<IUserInfo>(initialValue.userInfo);
  const [userAddress, setUserAddress] = useState<IUserAddress>(initialValue.userAddress);
  const [userAbout, setUserAbout] = useState<IUserAbout>(initialValue.userAbout);
  const [section, setSection] = useState<ISectionTypes>('info');

  const storeUserInfo = (info: IUserInfo) => {
    setUserInfo(info);
  };

  const storeUserAddress = (address: IUserAddress) => {
    setUserAddress(address);
  };

  const storeUserAbout = (about: IUserAbout) => {
    setUserAbout(about);
  };

  const handleSection = (sections: ISectionTypes) => {
    setSection(sections);
  };

  const context = {
    userInfo,
    userAddress,
    section,
    userAbout,
    storeUserInfo,
    storeUserAddress,
    storeUserAbout,
    handleSection,
  };

  return (
    <UserContext.Provider value={ context }>
      { children }
    </UserContext.Provider>
  );
};
