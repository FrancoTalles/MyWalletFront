import styled from "styled-components";
import {
  corFundoBordaBotao,
  corFundoInput,
  corLetraBotao,
  corLetrasInput,
  corLetrasTitulo,
  fundoApp,
} from "../../constants/colors";

export const NovaSaidaBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${fundoApp};
  height: 100vh;
  h1 {
    color: ${corLetrasTitulo};
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    margin-top: 25px;
    margin-left: 24px;
  }
`;

export const NovaSaidaForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 86.9%;
  align-self: center;
  margin-top: 40px;
  input {
    width: 100%;
    height: 58px;
    background-color: ${corFundoInput};
    border: 1px solid ${corFundoInput};
    border-radius: 5px;
    margin-bottom: 13px;
    padding-left: 15px;
    &::placeholder {
      color: ${corLetrasInput};
      font-family: "Raleway", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
    }
  }
`;

export const NovaSaidaFormButton = styled.button`
  width: 100%;
  height: 45px;
  color: ${corLetraBotao};
  background-color: ${corFundoBordaBotao};
  border: 1px solid ${corFundoBordaBotao};
  border-radius: 5px;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
  font-style: normal;
`;