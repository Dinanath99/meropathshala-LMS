import { authApi } from "@/features/api/authApi";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
export const appStore = configureStore({
  reducer: {
    auth: rootReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (defaultMiddleware) => {
    return defaultMiddleware().concat(authApi.middleware);
  },
});
