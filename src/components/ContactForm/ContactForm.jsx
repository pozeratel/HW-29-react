import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../features/contacts/contactsSlice";
import "./ContactForm.css";

export function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    const cleanName = name.trim();
    const cleanNumber = number.trim();
    if (!cleanName || !cleanNumber) return;
    if (contacts.some((contact) => contact.name.toLocaleLowerCase() === cleanName.toLocaleLowerCase())) {
      event.currentTarget.elements.name.setCustomValidity("Цей контакт уже є у списку.");
      event.currentTarget.elements.name.reportValidity();
      return;
    }
    dispatch(addContact({ name: cleanName, number: cleanNumber }));
    setName("");
    setNumber("");
  }

  function clearNameValidity(event) { event.currentTarget.setCustomValidity(""); }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="contact-form__field">Ім’я
        <input name="name" type="text" value={name} onChange={(event) => setName(event.target.value)} onInput={clearNameValidity} autoComplete="name" required />
      </label>
      <label className="contact-form__field">Номер телефону
        <input type="tel" value={number} onChange={(event) => setNumber(event.target.value)} autoComplete="tel" required />
      </label>
      <button className="contact-form__submit" type="submit">Додати контакт</button>
    </form>
  );
}

ContactForm.propTypes = {};


