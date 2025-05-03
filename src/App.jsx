import React, { Suspense } from "react";
import { useRoutes } from "react-router";
import AppRoutes from "./routes/Router";
import Spinner from "./components/common/Spinner";
import Cursor from "./components/common/Cursor";

const App = () => {
  const routing = useRoutes(AppRoutes);

  return (
    <div>
      {/* Add the custom cursor at the top level */}
      <Cursor/>

      {/* Your Suspense for async route loading */}
      <Suspense fallback={<Spinner />}>
        {routing}
      </Suspense>
    </div>
  );
};

export default App;
