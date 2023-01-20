import styled from "styled-components";

export const LoginBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #8c11be;
`;

export const Logo = styled.h1`
  width: 147px;
  height: 50px;
  font-family: "Saira Stencil One", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  color: #ffffff;
  margin-top: 159px;
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
  background-color: #ffffff;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  margin-top: 32px;
  padding-left: 15px;
  color: #000000;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  &::placeholder {
    color: #000000;
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

export const BotaoEntrar = styled.button`
  width: 100%;
  height: 45px;
  color: #ffffff;
  background-color: #a328d6;
  border: 1px solid #a328d6;
  border-radius: 5px;
  margin-top: 13px;
  font-family: "Raleway", sans-serif;
  font-size: 21px;
  line-height: 26px;
  font-weight: 400;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
`;
