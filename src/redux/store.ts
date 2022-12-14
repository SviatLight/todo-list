import { configureStore } from '@reduxjs/toolkit';
import { todosAPI } from './todosAPI';

export const store = configureStore({
  reducer: {
    [todosAPI.reducerPath]: todosAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
