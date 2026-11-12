import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";
import contactsReducer, { filterReducer } from "../features/contacts/contactsSlice";

const rootReducer = combineReducers({ contacts: contactsReducer, filter: filterReducer });
const persistedReducer = persistReducer({ key: "contacts-book", storage, whitelist: ["contacts"] }, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ["persist/FLUSH", "persist/REHYDRATE", "persist/PAUSE", "persist/PERSIST", "persist/PURGE", "persist/REGISTER"],
    },
  }),
});
export const persistor = persistStore(store);

