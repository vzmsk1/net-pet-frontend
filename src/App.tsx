import React from "react";
import Dummy from "./components/dummy/dummy.component";
import { withLayout } from "./layout/layout.component";

function App() {
  return <Dummy title="find a movie to watch tonight" />;
}

export default withLayout(App);

// export default App;
