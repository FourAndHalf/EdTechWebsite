import React from "react";
import Home from "./pages/Home.js";

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <div>
      <main>
        <Outlet/>
      </main>
      </div>
    </>
  );
}

export default App