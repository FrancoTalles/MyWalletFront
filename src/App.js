import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./constants/globalStyles";
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";

export default function App() {
  return (
    <BrowserRouter>
        <GlobalStyle />
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/cadastro" element={<Cadastro />}/>
        </Routes>
    </BrowserRouter>
  )
}
