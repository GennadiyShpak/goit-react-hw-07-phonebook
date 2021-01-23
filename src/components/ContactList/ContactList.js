import { useDispatch, useSelector } from 'react-redux';

import { getFilterName } from '../../redux/phone-book/phonebook-selector';

import s from './Contats.module.css';
import operations from '../../redux/phone-book/phonebook-operations';

function ContactList() {
  const contacts = useSelector(getFilterName);
  const dispatch = useDispatch();
  const onDelete = id => dispatch(operations.deleteContact(id));

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
