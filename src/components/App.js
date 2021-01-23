import ContactList from './ContactList';
import Form from './Form';
import Filter from './Filter';
import Section from './Section';

const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};
export default App;
