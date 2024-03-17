import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
