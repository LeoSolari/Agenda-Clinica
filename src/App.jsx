import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import NewUser from "./pages/NewUser";
import Pacientes from "./pages/Pacientes";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/new-user" element={<NewUser />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/pacientes" element={<Pacientes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
