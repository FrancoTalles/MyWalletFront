import { useState } from "react";
import env from "react-dotenv";
import { Link, useNavigate } from "react-router-dom";
import {
  BotaoCadastrar,
  CadastroBody,
  InputConfirmaSenha,
  InputEmail,
  InputNome,
  InputSenha,
  Logo,
  StyledForm,
  TextoParaLogin,
} from "./styledCadastro";
import axios from "axios";

export default function Cadastro() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function fazerCadastro(event) {
    event.preventDefault();
    console.log("enviando");
    const promise = axios.post(`${env.REACT_APP_API_URL}/cadastro`, form);

    promise.then((resposta) => {
      navigate("/");
    });

    promise.catch((err) => {
      if (form.password !== form.confirmPassword) {
        setForm({ ...form, password: "", confirmPassword: "" });
        return alert("As senhas não coincidem");
      }
      setForm({ ...form, password: "", confirmPassword: "" });
      return alert(err.response.data.message);
    });
  }

  return (
    <CadastroBody>
      <Logo> MyWallet </Logo>
      <StyledForm onSubmit={fazerCadastro}>
        <InputNome
          type="text"
          name="name"
          placeholder="Nome"
          required
          onChange={handleForm}
          value={form.name}
        />
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
        <InputConfirmaSenha
          type="password"
          name="confirmPassword"
          placeholder="Confirme a senha"
          required
          onChange={handleForm}
          value={form.confirmPassword}
        />
        <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
      </StyledForm>
      <Link to="/" style={{ textDecoration: "none" }}>
        <TextoParaLogin>Já tem uma conta? Entre agora!</TextoParaLogin>
      </Link>
    </CadastroBody>
  );
}
