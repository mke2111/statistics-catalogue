import { UPDATE_ASSET_LIST, UPDATE_CRYPTO_ASSET } from '../helpers/help';
import cryptoDefault from './cryptoDefault';

const crypto = (state = cryptoDefault, action) => {
  switch (action.type) {
    case UPDATE_ASSET_LIST:
      return [
        ...action.assetList,
      ];
    case UPDATE_CRYPTO_ASSET:
      return {
        ...action.assetData,
      };
    default:
      return state;
  }
};

export default crypto;
