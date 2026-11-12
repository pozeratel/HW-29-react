import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) { state.push(action.payload); },
      prepare({ name, number }) {
        return { payload: { id: nanoid(), name: name.trim(), number: number.trim() } };
      },
    },
    deleteContact(state, action) {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: { updateFilter: (_state, action) => action.payload },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export default contactsSlice.reducer;
