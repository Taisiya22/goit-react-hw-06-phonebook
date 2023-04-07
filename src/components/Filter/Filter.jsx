import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContact } from 'components/redux/contactsSlice';

export const Filter = ({ value, onChange }) => {
  const dispatch = useDispatch();

  return (
    <label className={css.search}>
      <p className={css.text}>Find contacts by name</p>
      <input type="text" name="filter" value={value} onChange={e=> dispatch(filterContact(e.target.value.toLowerCase()))} />
    </label>
  );
}
  


// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
