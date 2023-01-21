import {
  EntradaDiv,
  EntradaSaidaDiv,
  HeaderDiv,
  HomeBody,
  RegistrosDiv,
  SaidaDiv,
} from "./StyledHome";

export default function Home() {
  return (
    <HomeBody>
      <HeaderDiv>
        <h1>Olá, fulano</h1>
        <ion-icon name="exit-outline"></ion-icon>
      </HeaderDiv>
      <RegistrosDiv>
        <h1>Não há registros de entrada ou saída</h1>
      </RegistrosDiv>
      <EntradaSaidaDiv>
        <EntradaDiv>
          <ion-icon name="add-circle-outline"></ion-icon>
          <h1>Nova Entrada</h1>
        </EntradaDiv>
        <SaidaDiv>
          <ion-icon name="add-circle-outline"></ion-icon>
          <h1>Nova Saida</h1>
        </SaidaDiv>
      </EntradaSaidaDiv>
    </HomeBody>
  );
}
