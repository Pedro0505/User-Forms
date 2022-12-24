import ISectionTypes from './ISectionTypes';
import IUserAbout from './IUserAbout';
import IUserAddress from './IUserAddress';
import IUserInfo from './IUserInfo';

interface IUserContextType {
  userInfo: IUserInfo;
  userAddress: IUserAddress;
  userAbout: IUserAbout;
  section: ISectionTypes;
  handleSection(section: ISectionTypes): void;
  storeUserInfo(info: IUserInfo): void;
  storeUserAddress(address: IUserAddress): void;
  storeUserAbout(about: IUserAbout): void;
  resetUserInfos(): void;
}

export default IUserContextType;
