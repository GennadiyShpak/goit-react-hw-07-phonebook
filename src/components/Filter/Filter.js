import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFilter } from '../../redux/phone-book/phonebook-selector';
import s from './Filter.module.css';
import { filterContact } from '../../redux/phone-book/phonebook-actions';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = ({ target }) => dispatch(filterContact(target.value));
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
