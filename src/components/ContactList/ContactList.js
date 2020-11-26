import ContactListItem from './ContactListItem';

function ContactList({ contacts, onDeleteHandler }) {
  return (
    contacts.length > 0 && (
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactListItem
              info={{ name, number }}
              key={id}
              onDeleteHandler={() => onDeleteHandler(id)}
            />
          );
        })}
      </ul>
    )
  );
}

export default ContactList;
