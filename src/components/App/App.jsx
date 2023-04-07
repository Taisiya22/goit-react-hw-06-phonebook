
import { Form } from '../Form/Form';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

import css from './App.module.css';

export const App = () => {
  // const [contacts, setContacts] = useLocaleStorage('contacts', []);
  // const [filter, setFilter] = useLocaleStorage('filter', '');

  // const formSubmitHandler = newContact => {
  //   setContacts([...contacts, newContact]);
  // };

  // const onDelete = idContact => {
  //   setContacts(contacts.filter(contact => contact.id !== idContact));
  // };

  // const onChangeFilter = e => {
  //   setFilter(e.target.value);
  // };

  // const getFilterContact = useMemo(() => {
  //   console.log('memo');
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // }, [contacts, filter]);

  return (
    <div className={css.wrapper}>
      <h2>Phonebook</h2>
        <Form />
          <Filter/>
          <ContactList/>
    </div>
  );
};
