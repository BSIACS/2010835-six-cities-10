import { configureStore } from '@reduxjs/toolkit';
import { applicationReducer } from './slices/application.slice';
import { testReducer } from './slices/test.slice';

export const store = configureStore({
  reducer: {
    application: applicationReducer,
    test: testReducer
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
