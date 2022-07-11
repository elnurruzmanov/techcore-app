import React from "react";
//components
import Menu from "./components/menu/Menu";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Settings from "./pages/settings/Settings";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<PageNotFound />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
