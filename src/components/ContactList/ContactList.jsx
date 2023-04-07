import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContact, filterContact, deleteContact } from 'components/redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContact);
  const filter = useSelector(filterContact);
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {
        // .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        contacts.map(({ id, name, number }) => (
          <li className={css.item} key={id}>
            {name}: {number}
            <button
              className={css.deleteBtn}
              onClick={() => dispatch(deleteContact(id))}
              type="button"
            >
              Delete
            </button>
          </li>
        ))
      }
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
