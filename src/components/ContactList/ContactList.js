import { useDispatch, useSelector } from 'react-redux';

import { phoneBoookSelectors } from 'redux/phone-book';

import s from './Contats.module.css';
import { phoneBoookOperations } from 'redux/phone-book';

function ContactList() {
  const contacts = useSelector(phoneBoookSelectors.getFilterName);
  const dispatch = useDispatch();
  const onDelete = id => dispatch(phoneBoookOperations.deleteContact(id));

  if (contacts.length === 0) {
    return null;
  }
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => {
              onDelete(id);
            }}
            className={s.contactBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
