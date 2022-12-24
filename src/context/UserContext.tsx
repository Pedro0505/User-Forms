import React, { createContext, useState } from 'react';
import IIconsStatus from './interfaces/IIconsStatus';
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
  iconsNav: {
    userInfo: 'in-use',
    userAddress: 'to-complete',
    userAbout: 'to-complete',
  },
  section: 'info',
  handleSection: () => {},
  storeUserInfo: () => {},
  storeUserAddress: () => {},
  storeUserAbout: () => {},
  handleIconsStatus: () => {},
  resetUserInfos: () => {},
};

export const UserContext = createContext<IUserContextType>(initialValue);

export const UserProvider = ({ children }: IUserContextProps) => {
  const [userInfo, setUserInfo] = useState<IUserInfo>(initialValue.userInfo);
  const [userAddress, setUserAddress] = useState<IUserAddress>(initialValue.userAddress);
  const [userAbout, setUserAbout] = useState<IUserAbout>(initialValue.userAbout);
  const [iconsNavStatus, setIconsNavStatus] = useState(initialValue.iconsNav);
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

  const handleIconsStatus = (field: keyof typeof initialValue.iconsNav, value: IIconsStatus) => {
    setIconsNavStatus((prevState) => ({ ...prevState, [field]: value }));
  };

  const resetUserInfos = () => {
    setUserInfo(initialValue.userInfo);
    setUserAbout(initialValue.userAbout);
    setUserAddress(initialValue.userAddress);
    setIconsNavStatus(initialValue.iconsNav);
    setSection('info');
  };

  const context = {
    userInfo,
    userAddress,
    section,
    userAbout,
    iconsNav: iconsNavStatus,
    storeUserInfo,
    storeUserAddress,
    storeUserAbout,
    handleSection,
    resetUserInfos,
    handleIconsStatus,
  };

  return (
    <UserContext.Provider value={ context }>
      { children }
    </UserContext.Provider>
  );
};
