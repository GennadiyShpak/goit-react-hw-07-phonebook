import { useDispatch, useSelector } from 'react-redux';

import { phoneBoookSelectors } from 'redux/phone-book';
import s from './Filter.module.css';
import { phoneBoookActions } from 'redux/phone-book';

function Filter() {
  const filter = useSelector(phoneBoookSelectors.getFilter);
  const dispatch = useDispatch();
  const onChange = ({ target }) =>
    dispatch(phoneBoookActions.filterContact(target.value));
  return (
    <>
      <label className={s.filterLabel}>
        Find contact by name
        <input
          type="text"
          value={filter}
          onChange={onChange}
          placeholder="Enter name to filter"
        />
      </label>
    </>
  );
}

export default Filter;
