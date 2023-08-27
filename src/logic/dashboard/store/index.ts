import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DashboardTabs } from "../enums";
import { DownloadTask } from "../types";

type Props = {
  activeTab: string;
  downloads: DownloadTask[];
};

const initialState: Props = {
  activeTab: DashboardTabs.active,
  downloads: [],
};

export const dashboard = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      const currentState = state;
      currentState.activeTab = action.payload;
    },
    setDownloads: (state, action: PayloadAction<DownloadTask[]>) => {
      const currentState = state;
      currentState.downloads = action.payload;
    },
  },
});

export const { setActiveTab, setDownloads } = dashboard.actions;

export default dashboard.reducer;
