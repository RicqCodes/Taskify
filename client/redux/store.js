import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";

import { taskifyApi } from "./api/taskifyApi";

export const makeStore = (context) =>
  configureStore({
    reducer: {
      [taskifyApi.reducerPath]: taskifyApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        thunk: {
          extraArgument: {
            cookie:
              context.req?.headers?.cookie ||
              context?.ctx?.req?.headers?.cookie,
          },
        },
      }).concat(thunk, taskifyApi.middleware),
  });

// setupListeners(store.dispatch);

export const wrapper = createWrapper(makeStore);
