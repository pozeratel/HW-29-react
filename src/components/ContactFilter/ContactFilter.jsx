import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../features/contacts/contactsSlice";
import "./ContactFilter.css";

export function ContactFilter() {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <label className="contact-filter">
      <span>Пошук</span>
      <input type="search" value={filter} onChange={(event) => dispatch(updateFilter(event.target.value))} placeholder="Знайти за ім’ям" />
    </label>
  );
}

ContactFilter.propTypes = {};


