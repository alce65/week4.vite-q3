import { useState } from 'react';
import { Contacts } from '../../components/about/contacts/contacts';
import { ContactsR } from '../../components/about/contacts/contacts.r';

function About() {
  type ContactType = 'controlled' | 'unControlled';
  const initialState: ContactType = 'unControlled';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [contactType, _setContactType] = useState<ContactType>(initialState);

  return (
    <section>
      <h2>Acerca de nosotros</h2>
      {contactType === 'unControlled' && <Contacts></Contacts>}
      {contactType === 'controlled' && <ContactsR></ContactsR>}
    </section>
  );
}

export default About;
