import { Routes, Route } from "react-router-dom";
import { Packaging } from "./pages/packaging-page";
import { Eqipment } from "./pages/equipment-page";
import { Service } from "./pages/service-page";
import { NotFound } from "./pages/not-found-page";

import { Layout } from "./views/components/Layout";
import { Contacts } from "./pages/contacts-page";

import "./App.css";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Contacts></Contacts>}></Route>
          <Route path="/packaging" element={<Packaging></Packaging>}></Route>
          <Route path="/eqipment" element={<Eqipment></Eqipment>}></Route>
          <Route path="/service" element={<Service></Service>}></Route>
          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>
    </>
  );
};
