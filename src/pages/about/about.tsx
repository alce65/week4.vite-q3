import { Contacts } from '../../components/contacts/contacts';
import { ContactsR } from '../../components/contacts/contacts.r';

function About() {
  return (
    <section>
      <h2>Acerca de nosotros</h2>
      <Contacts></Contacts>
      <hr />
      <ContactsR></ContactsR>
    </section>
  );
}

export default About;
