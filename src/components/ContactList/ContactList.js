import ContactListItem from './ContactListItem';

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return <ContactListItem info={{ name, number }} key={id} />;
      })}
    </ul>
  );
}

export default ContactList;
