import PropTypes from "prop-types";
import { ContactItem } from "../ContactItem/ContactItem";
import "./ContactList.css";

export function ContactList({ contacts }) {
  if (contacts.length === 0) return <p className="contact-list__empty">Контактів поки немає.</p>;
  return <ul className="contact-list">{contacts.map((contact) => <ContactItem key={contact.id} contact={contact} />)}</ul>;
}

ContactList.propTypes = { contacts: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired, name: PropTypes.string.isRequired, number: PropTypes.string.isRequired })).isRequired };
