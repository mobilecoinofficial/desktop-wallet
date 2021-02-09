import type { MobilecoindClient } from '../client';

abstract class BaseService<T> {
  client: MobilecoindClient | null;

  argsObj: T;

  // TODO, define argsObj based on the children interfaces
  constructor(client: MobilecoindClient, argsObj: T) {
    this.client = client;
    this.argsObj = argsObj;
  }

  abstract call(): void; // must be implemented in derived classes
  // TODO, should i consider making a super call? specific to end with handlers

  // TODO , i should build a ServiceResponse class

  // eslint-disable-next-line class-methods-use-this
  handleError(err: any) {
    // We want to catch any error here, parse it, and clean it up for the user
    // We should be able to match the mobilecoind error to a list a
    // user-friendly responses.
    return {
      data: null,
      errorMessage: err.message || 'Something went wrong. This is a placeholder error message.',
      isSuccess: false,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  handleSuccess(data) {
    return {
      data,
      errorMessage: '',
      isSuccess: true,
    };
  }
}

export default BaseService;
