import { Link } from "react-router-dom";
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


export default function Cadastro() {
  return (
    <CadastroBody>
      <Logo> MyWallet </Logo>
      <StyledForm>
        <InputNome type="text" name="name" placeholder="Nome" required />
        <InputEmail type="email" name="email" placeholder="E-mail" required />
        <InputSenha
          type="password"
          name="password"
          placeholder="Senha"
          required
        />
        <InputConfirmaSenha
          type="password"
          name="confirmPassword"
          placeholder="Confirme a senha"
          required
        />
        <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar> 
      </StyledForm>
      <Link to="/" style={{textDecoration: "none"}}>
        <TextoParaLogin>
            Já tem uma conta? Entre agora!
        </TextoParaLogin>
      </Link>
    </CadastroBody>
  );
}
