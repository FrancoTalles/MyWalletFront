import { Link } from "react-router-dom";
import {
  BotaoEntrar,
  InputEmail,
  InputSenha,
  LoginBody,
  Logo,
  StyledForm,
  TextoParaCadastrar,
} from "./styledLogin";

export default function Login() {
  return (
    <LoginBody>
      <Logo> MyWallet </Logo>
      <StyledForm>
        <InputEmail type="email" name="email" placeholder="E-mail" required />
        <InputSenha
          type="password"
          name="password"
          placeholder="Senha"
          required
        />
        <BotaoEntrar type="submit">Entrar</BotaoEntrar>
      </StyledForm>
      <Link to="/cadastro">
        <TextoParaCadastrar>
          Primeira vez? Cadastra-se!
        </TextoParaCadastrar>
      </Link>
    </LoginBody>
  );
}
