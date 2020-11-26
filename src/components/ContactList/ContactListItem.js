import DeleteButton from './DeleteButton';

function ContactListItem({ info, onDeleteHandler }) {
  return (
    <li>
      <span>{`${info.name}: `}</span>
      <span>{info.number}</span>
      <DeleteButton handler={onDeleteHandler} />
    </li>
  );
}

export default ContactListItem;
