import React from "react";
import { Outlet } from "react-router-dom";
import { withLayout } from "./layout/layout.component";

function App() {
  return <Outlet />;
}

export default withLayout(App);

// export default App;
