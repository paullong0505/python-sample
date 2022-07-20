import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { history } from "./utils/history";
import PageRegister from "./pages/auth/register";
import PageHome from "./pages/home";
import PageLogin from "./pages/auth/login";
import PageHeader from "./layouts/header";
import PageFooter from "./layouts/footer";
const App = () => {
  return (
    <BrowserRouter history={history}>
      <PageHeader />
      <main>
        <Routes>
          <Route path="/home" element={<PageHome />} />
          <Route path="/register" element={<PageRegister />} />
          <Route path="/login" element={<PageLogin />} />
        </Routes>
      </main>
      <PageFooter />
    </BrowserRouter>
  );
};

export default App;
