import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "../common/constants";

const Dashboard = lazy(() => import("./dashboard"));
const RequestPage = lazy(() => import("./request"));

function AppRoutes(): React.ReactElement {
  return (
    <Routes>
      <Route
        path={APP_ROUTES.dashboard}
        element={
          <Suspense fallback={<>...</>}>
            <Dashboard />
          </Suspense>
        }
      />
      <Route
        path={APP_ROUTES.request}
        element={
          <Suspense fallback={<>...</>}>
            <RequestPage />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={<Navigate to={{ pathname: APP_ROUTES.dashboard }} />}
      />
    </Routes>
  );
}

export default AppRoutes;
