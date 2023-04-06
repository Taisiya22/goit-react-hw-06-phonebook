import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { filterContact, getContact } from 'components/redux/selector';

export const ContactList = ({contacts, onDelete }) => {
  // const contacts = useSelector(getContact);
  const filter = useSelector(filterContact);

  return(<ul className={css.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={css.item} key={id}>
        {name}: {number}
        <button
          className={css.deleteBtn}
          onClick={() => onDelete(id)}
          type="button"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>);
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
