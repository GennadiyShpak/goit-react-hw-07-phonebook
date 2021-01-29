import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

import { phoneBoookOperations } from '../../redux/phone-book';
import s from './Form.module.css';

const Form = () => {
  const [state, setState] = useState();
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const onSubmit = text => dispatch(phoneBoookOperations.addContact(text));
  useEffect(() => {
    dispatch(phoneBoookOperations.fetchContacts());
  }, [dispatch]);

  const oninputHandler = ({ target }) => {
    const { name, value } = target;
    setState(state => ({ ...state, [name]: value }));
  };

  const onSubmitHandler = () => {
    const { name, number } = state;

    !name || !number ? alert(`Some field are empty`) : onSubmit(state);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className={s.a}>
      <label className={s.label}>
        Name
        <input
          type="text"
          ref={register}
          name="name"
          onChange={oninputHandler}
          placeholder="Enter name"
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          ref={register}
          name="number"
          onChange={oninputHandler}
          placeholder="Enter phone number"
        />
      </label>

      <button type="submit" className={s.addBtn}>
        Add contact
      </button>
    </form>
  );
};
export default Form;
