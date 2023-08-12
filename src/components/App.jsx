import  Container  from './Container/Container';
import  Section  from './Section/Section';
import Form from './Form/Form';
import Contact from './Contact/Contact';
import Filter from './Filter/Filter';

const App = () => {
 
  return (
    <>
      <Container>
        <Section title={'Phonebook'}>
          <Form></Form>
        </Section>
        <Section title={'Contacts'}>
          <Filter />
         <Contact/>
        </Section>
      </Container>
    </>
  );
};

export default App;