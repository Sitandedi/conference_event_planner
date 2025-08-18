// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import avReducer from './avSlice';

export default configureStore({
  reducer: {
    venue: venueReducer,   // state.venue is managed by venueReducer. all components in the application can access the state managed by the venueReducer()
    av: avReducer,
  },
});
