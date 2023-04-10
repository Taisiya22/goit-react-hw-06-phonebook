import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact, contactsFilter } from 'components/redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
const filter = useSelector(filterContact);
  return (
    <label className={css.search}>
      <p className={css.text}>Find contacts by name</p>
      <input type="text" name="filter" value={filter} onChange={e=> dispatch(contactsFilter(e.target.value.toLowerCase()))} />
    </label>
  );
}
  


Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
