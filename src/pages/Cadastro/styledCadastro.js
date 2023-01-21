import styled from "styled-components";
import { corBordaInput, corFundoBordaBotao, corFundoInput, corLetraBotao, corLetraLinkCadastroLogin, corLetrasInput, corLetrasTitulo, fundoApp } from "../../constants/colors";

export const CadastroBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${fundoApp};
    height: 100vh;
`

export const Logo = styled.h1`
    width: 147px;
    height: 50px;
    font-family: "Saira Stencil One", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: ${corLetrasTitulo};
    margin-top: 95px;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 86.9%;
`;

export const InputEmail = styled.input`
    width: 100%;
    height: 58px;
    background-color: ${corFundoInput};
    border: 1px solid ${corBordaInput};
    border-radius: 5px;
    margin-top: 13px;
    padding-left: 15px;
    color: ${corLetrasInput};
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    &::placeholder{
        color: ${corLetrasInput};
        font-family: "Raleway", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
    }
`;

export const InputSenha = styled(InputEmail)`
    margin-top: 13px;
`;

export const InputNome = styled(InputSenha)`
    margin-top: 32px;`;

export const InputConfirmaSenha = styled(InputSenha)``;

export const BotaoCadastrar = styled.button`
    width: 100%;
    height: 45px;
    color: ${corLetraBotao};
    background-color: ${corFundoBordaBotao};
    border: 1px solid ${corFundoBordaBotao};
    border-radius: 5px;
    margin-top: 13px;
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    line-height: 26px;
    font-weight: 700;
    font-style: normal;
`;

export const TextoParaLogin = styled.h1`
    margin-top: 36px;
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: ${corLetraLinkCadastroLogin};
    text-decoration-line: none;
`