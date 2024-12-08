import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Packaging } from "./pages/Packaging";
import { Eqipment } from "./pages/Equipment";
import { Service } from "./pages/Service";
import { NotFound } from "./pages/NotFound";

import { Layout } from "./views/components/Layout";
import { Contacts } from "./pages/Contacts";



function App() {
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
}

export default App;
