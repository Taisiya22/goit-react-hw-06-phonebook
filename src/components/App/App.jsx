import { useSelector } from 'react-redux';
import { Form } from '../Form/Form';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Section } from 'components/Section/Section';
import css from './App.module.css';
import { getContact } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContact);
  return (
    <div className={css.wrapper}>
      <Section title="Phone book">
        <Form />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      )}
    </div>
  );
};
