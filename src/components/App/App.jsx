
import { Form } from '../Form/Form';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Section } from 'components/Section/Section';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.wrapper}>
      <Section title='Phone book'>
        <Form />
      </Section>
      <Section title='Contacts'>
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};
