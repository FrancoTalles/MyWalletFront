import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./constants/globalStyles";
import Cadastro from "./pages/Cadastro/Cadastro";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NovaEntrada from "./pages/NovaEntrada/NovaEntrada";

export default function App() {
  return (
    <BrowserRouter>
        <GlobalStyle />
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/nova-entrada" element={<NovaEntrada />}/>
        </Routes>
    </BrowserRouter>
  )
}
