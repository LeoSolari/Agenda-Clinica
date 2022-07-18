import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Login from "./pages/Login";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import NewUser from "./pages/NewUser";
import Pacientes from "./pages/Pacientes";
import FakeList from "./components/FakeList";
import Meses from "./pages/Meses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/new-user" element={<NewUser />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/prueba" element={<FakeList />} />
        <Route path="/meses" element={<Meses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
