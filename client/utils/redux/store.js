import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { createWrapper } from "next-redux-wrapper";

import { taskifyApi } from "./api/taskifyApi";

export const makeStore = () =>
  configureStore({
    reducer: {
      [taskifyApi.reducerPath]: taskifyApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        taskifyApi.middleware
      ),
  });

// setupListeners(store.dispatch);

export const wrapper = createWrapper(makeStore, { debug: true });
