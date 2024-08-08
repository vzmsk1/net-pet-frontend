import React, { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [jwtToken, setJwtToken] = useState("");

  return (
    <>
      <Outlet
        context={{
          jwtToken,
          setJwtToken,
        }}
      />
    </>
  );
}

export default App;
