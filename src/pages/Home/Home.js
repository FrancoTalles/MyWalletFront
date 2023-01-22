import {
  EntradaDiv,
  EntradaSaidaDiv,
  HeaderDiv,
  HomeBody,
  Registro,
  RegistrosDiv,
  SaidaDiv,
  Total,
} from "./StyledHome";

export default function Home() {
  const teste = [
    { valor: 30.9, descricao: "Primeiro", data: "30/11", type: "output" },
    { valor: 530.9, descricao: "Pagamento", data: "20/11", type: "input" },
    { valor: 30.9, descricao: "Primeiro", data: "30/11", type: "output" },
    { valor: 530.9, descricao: "Pagamento", data: "20/11", type: "input" },
  ];

  const total = teste?.reduce((acc, movement) => {
    return movement.type === "input" ? acc + movement.valor : acc - movement.valor;
  }, 0);

  return (
    <HomeBody>
      <HeaderDiv>
        <h1>Olá, fulano</h1>
        <ion-icon name="exit-outline"></ion-icon>
      </HeaderDiv>
      <RegistrosDiv>
        {teste.length !== 0 ? (
          teste.map((item, index) => (
            <Registro key={index} type={item.type}>
              <div>
                <p>{item.data}</p>
                <h2>{item.descricao}</h2>
              </div>
              <h3>{item.valor}</h3>
            </Registro>
          ))
        ) : (
          <h1>Não há registros de entrada ou saída</h1>
        )}
        {teste.length !== 0 ? (
        <Total total={total.toFixed(2)}>
          <p>SALDO</p>
          <h3>{total.toFixed(2)}</h3>
        </Total>
      ) : (<></>)}
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
