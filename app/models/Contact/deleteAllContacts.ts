import * as localStore from '../../utils/LocalStore';

const deleteAllContacts = (): void => {
  localStore.deleteEncryptedContacts();
};

export default deleteAllContacts;
