/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrxState } from "../enums";

type Props = {
  trxResponse: any;
  isLoading: boolean;
  trxState: number;
};

const initialState: Props = {
  trxResponse: {},
  isLoading: false,
  trxState: TrxState.unset,
};

export const common = createSlice({
  name: "common",
  initialState,
  reducers: {
    setTrxResponse: (state, action: PayloadAction<any>) => {
      const currentState = state;
      currentState.trxResponse = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      const currentState = state;
      currentState.isLoading = action.payload;
    },
    setTrxState: (state, action: PayloadAction<number>) => {
      const currentState = state;
      currentState.trxState = action.payload;
    },
  },
});

export const { setTrxResponse, setIsLoading, setTrxState } = common.actions;

export default common.reducer;
