import axios from 'axios';

import {
  fetchContactSuccess,
  fetchContactRequest,
  fetchContactError,
  addContactSuccess,
  addContactRequest,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './phonebook-actions';

axios.defaults.baseURL = 'http://localhost:3004';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

export const addContact = ({ name, number }) => dispatch => {
  const contact = { name, number, completed: false };

  dispatch(addContactRequest);

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))

    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest);

  axios
    .delete(`contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError, error));
};
