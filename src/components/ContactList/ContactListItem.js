function ContactListItem({ info }) {
  return (
    <li>
      <span>{`${info.name}: `}</span>
      <span>{info.number}</span>
    </li>
  );
}

export default ContactListItem;
