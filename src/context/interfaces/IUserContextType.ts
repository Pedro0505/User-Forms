import IIconsStatus from './IIconsStatus';
import ISectionTypes from './ISectionTypes';
import IUserAbout from './IUserAbout';
import IUserAddress from './IUserAddress';
import IUserInfo from './IUserInfo';

interface IUserContextType {
  userInfo: IUserInfo;
  userAddress: IUserAddress;
  userAbout: IUserAbout;
  section: ISectionTypes;
  iconsNav: {
    userInfo: IIconsStatus,
    userAbout: IIconsStatus,
    userAddress: IIconsStatus,
  }
  handleSection(section: ISectionTypes): void;
  storeUserInfo(info: IUserInfo): void;
  storeUserAddress(address: IUserAddress): void;
  storeUserAbout(about: IUserAbout): void;
  handleIconsStatus(field: 'userInfo' | 'userAddress' | 'userAbout', value: IIconsStatus): void;
  resetUserInfos(): void;
}

export default IUserContextType;
