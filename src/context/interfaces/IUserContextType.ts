import ISectionTypes from './ISectionTypes';
import IUserAddress from './IUserAddress';
import IUserInfo from './IUserInfo';

interface IUserContextType {
  userInfo: IUserInfo;
  userAddress: IUserAddress;
  section: ISectionTypes;
  handleSection(section: ISectionTypes): void;
  storeUserInfo(info: IUserInfo): void;
  storeUserAddress(address: IUserAddress): void;
}

export default IUserContextType;
