import styled from "styled-components";
import {
  corFundoEntradaSaida,
  corFundoRegistros,
  corIconEntradaSaida,
  corLetraEntradaSaida,
  corLetraIconHeader,
  corLetraSemRegistro,
  fundoApp,
} from "../../constants/colors";

export const HomeBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: ${fundoApp};
height: 100em;
`;

export const HeaderDiv = styled.div`
margin-top: 25px;
display: flex;
width: 87vw;
height: 31px;
align-items: center;
justify-content: space-between;
h1 {
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  color: ${corLetraIconHeader};
}
ion-icon {
  font-size: 23px;
  color: ${corLetraIconHeader};
  font-weight: 700;
  zoom: 1.2;
}
`;

export const RegistrosDiv = styled.div`
background-color: ${corFundoRegistros};
width: 87vw;
height: 67vh;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
margin-top: 22px;
h1 {
  color: ${corLetraSemRegistro};
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  margin-left: 73px;
  margin-right: 73px;
}
`;

export const EntradaSaidaDiv = styled.div`
width: 87vw;
height: 18vh;
margin-top: 13px;
display: flex;
justify-content: space-between;
`;

export const EntradaDiv = styled.div`
width: 41vw;
height: 100%;
background-color: ${corFundoEntradaSaida};
position: relative;
border-radius: 5px;
ion-icon {
  font-size: 25px;
  position: absolute;
  top: 9px;
  left: 8px;
  color: ${corIconEntradaSaida};
}
h1 {
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: ${corLetraEntradaSaida};
  width: 64px;
  position: absolute;
  bottom: 9px;
  left: 10px;
}
`;

export const SaidaDiv = styled.div`
  width: 41vw;
  height: 100%;
  background-color: ${corFundoEntradaSaida};
  position: relative;
  border-radius: 5px;
  ion-icon {
    font-size: 25px;
    position: absolute;
    top: 9px;
    left: 8px;
    color: ${corIconEntradaSaida};
  }
  h1 {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: ${corLetraEntradaSaida};
    width: 64px;
    position: absolute;
    bottom: 9px;
    left: 10px;
  }
`;

