import { useSelector } from "react-redux";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactFilter } from "../ContactFilter/ContactFilter";
import { ContactList } from "../ContactList/ContactList";
import "./App.css";

function App() {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const normalizedFilter = filter.trim().toLocaleLowerCase();
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter),
  );

  return (
    <main className="app">
      <header className="app__header">
        <p className="app__eyebrow">Особиста база</p>
        <h1>Книга контактів</h1>
        <p className="app__intro">Зберігайте важливі контакти в одному місці.</p>
      </header>
      <div className="app__layout">
        <section className="app__panel" aria-labelledby="new-contact-title">
          <h2 id="new-contact-title">Новий контакт</h2>
          <ContactForm />
        </section>
        <section className="app__panel app__panel--contacts" aria-labelledby="contacts-title">
          <div className="app__contacts-heading">
            <div><h2 id="contacts-title">Контакти</h2><p>{contacts.length} збережено</p></div>
            <ContactFilter />
          </div>
          <ContactList contacts={visibleContacts} />
        </section>
      </div>
    </main>
  );
}

App.propTypes = {};

export default App;




