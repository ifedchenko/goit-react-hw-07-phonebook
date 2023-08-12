import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    value: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.value.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.value = state.value.filter(contact => contact.id !== action.payload);
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    filter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const { filter } = filterSlice.actions;