import IUserAddress from './IUserAddress';
import IUserInfo from './IUserInfo';

interface IUserContextType {
  userInfo: IUserInfo,
  userAddress: IUserAddress,
  storeUserInfo(info: IUserInfo): void,
  storeUserAddress(address: IUserAddress): void,
}

export default IUserContextType;
