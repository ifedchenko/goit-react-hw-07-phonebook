import { configureStore } from '@reduxjs/toolkit';

import { contactSlice, filterSlice } from './slice';

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
});
