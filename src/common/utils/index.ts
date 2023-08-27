import { APP_ROUTES } from "../constants";

export const isRequestPage = () =>
  window.location.pathname.match(APP_ROUTES.request);

export const isDashboardPage = () =>
  window.location.pathname.match(APP_ROUTES.dashboard);
