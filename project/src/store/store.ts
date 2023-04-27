import { configureStore } from '@reduxjs/toolkit';
import { applicationReducer } from './slices/application.slice';

export const store = configureStore({
  reducer: {
    application: applicationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;