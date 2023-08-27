import { configureStore } from "@reduxjs/toolkit";
import dashboard from "../../logic/dashboard/store";
import common from "./common";

export const store = configureStore({
  reducer: {
    dashboard,
    common,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
