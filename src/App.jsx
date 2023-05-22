import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import { Header } from "./components";

import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Pages.Home />} />
          <Route path="/shows" element={<Pages.Shows />} />
          <Route path="/shows/:id" element={<Pages.Show />} />
          <Route path="/search" element={<Pages.Search />} />
          <Route path="*" element={<Pages.NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
