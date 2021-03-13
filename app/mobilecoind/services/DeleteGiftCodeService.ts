import * as localStore from '../../utils/LocalStore';
import BaseService from './BaseService';

interface DeleteGiftCodeServiceArgs {
  storedGiftB58Code: string;
}

class DeleteGiftCodeService extends BaseService<DeleteGiftCodeServiceArgs> {
  call() {
    try {
      const { storedGiftB58Code } = this.argsObj;

      const giftCodes = localStore.getGiftCodes();
      if (!Array.isArray(giftCodes)) {
        throw new Error('Cannot find gift codes');
      }

      let giftCodeIndex;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < giftCodes.length; i++) {
        if (giftCodes[i].giftB58Code === storedGiftB58Code) {
          giftCodeIndex = i;
          break;
        }
      }

      if (giftCodeIndex === undefined) {
        throw new Error('Cannot find gift code');
      }

      giftCodes.splice(giftCodeIndex, 1);
      localStore.setGiftCodes(giftCodes);

      // At this point, let's make sure to store the entropy
      // in the context, we can detect the change and begin monitoring the gift code
      // we want the user to be able to retreive the code on click
      // it's not clear to me if these should be encrypted like the account
      return this.handleSuccess({ giftCodes });
    } catch (err) {
      return this.handleError(err);
    }
  }
}

export default DeleteGiftCodeService;
