import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../features/contacts/contactsSlice";
import "./ContactItem.css";

export function ContactItem({ contact }) {
  const dispatch = useDispatch();
  return (
    <li className="contact-item">
      <div className="contact-item__avatar" aria-hidden="true">{contact.name.trim().charAt(0).toLocaleUpperCase()}</div>
      <div className="contact-item__details"><h3>{contact.name}</h3><a href={`tel:${contact.number}`}>{contact.number}</a></div>
      <button className="contact-item__delete" type="button" onClick={() => dispatch(deleteContact(contact.id))} aria-label={`Видалити контакт ${contact.name}`}>Видалити</button>
    </li>
  );
}

ContactItem.propTypes = { contact: PropTypes.shape({ id: PropTypes.string.isRequired, name: PropTypes.string.isRequired, number: PropTypes.string.isRequired }).isRequired };
