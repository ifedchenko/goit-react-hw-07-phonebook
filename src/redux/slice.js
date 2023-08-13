import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: {
//     [fetchContacts.pending]: handlePending,
//     [fetchContacts.fulfilled]: (state, action) => {
//       state.items = action.payload;
//       state.isLoading = false;
//     },
//     [fetchContacts.rejected]: handleRejected,
//     [deleteContact.pending]: handlePending,
//     [deleteContact.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.items = state.items.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//     [deleteContact.rejected]: handleRejected,
//     [addContact.pending]: handlePending,
//     [addContact.fulfilled]: (state, action) => {
//       state.items.unshift(action.payload);
//       state.isLoading = false;
//     },
//     [addContact.rejected]: handleRejected,
//   },
// });

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
        state.isLoading = false;
      })

      .addCase(deleteContact.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
        state.isLoading = false;
      })
      .addCase(addContact.rejected, handleRejected);
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

export const { filter } = filterSlice.actions;
