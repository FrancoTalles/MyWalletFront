import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import env from "react-dotenv";
import {
  BotaoEntrar,
  InputEmail,
  InputSenha,
  LoginBody,
  Logo,
  StyledForm,
  TextoParaCadastrar,
} from "./styledLogin";
import UserContext from "../../contexts/UserContext";

export default function Login() {

  const {setUser} = useContext(UserContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function fazerLogin(event) {
    event.preventDefault();
    console.log("carregando");
    const promise = axios.post(`${env.REACT_APP_API_URL}/login`, form);

    promise.then((resposta) => {
      setUser(resposta.data);
      navigate("/home");
    })

    promise.catch((err) => {
      alert(err.response.data);
      setForm({...form, password: ""});
    })
  }

  return (
    <LoginBody>
      <Logo> MyWallet </Logo>
      <StyledForm onSubmit={fazerLogin}>
        <InputEmail
          type="email"
          name="email"
          placeholder="E-mail"
          required
          onChange={handleForm}
          value={form.email}
        />
        <InputSenha
          type="password"
          name="password"
          placeholder="Senha"
          required
          onChange={handleForm}
          value={form.password}
        />
        <BotaoEntrar type="submit">Entrar</BotaoEntrar>
      </StyledForm>
      <Link to="/cadastro" style={{ textDecoration: "none" }}>
        <TextoParaCadastrar>Primeira vez? Cadastra-se!</TextoParaCadastrar>
      </Link>
    </LoginBody>
  );
}
