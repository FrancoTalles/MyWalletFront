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
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import env from "react-dotenv";
import { Link } from "react-router-dom";

export default function Home() {
  const { user } = useContext(UserContext);

  const [moves, setMoves] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  useEffect(() => {
    const promise = axios.get(
      `${env.REACT_APP_API_URL}/home/${user.userId}`,
      config
    );

    promise.then((resposta) => {
      console.log(resposta.data);
      setMoves(resposta.data);
    });

    promise.catch((err) => {
      console.log(err.response.data);
      alert(err.response.data);
    });
  }, []);

  // const teste = [
  //   { valor: 30.9, descricao: "Primeiro", data: "30/11", type: "output" },
  //   { valor: 530.9, descricao: "Pagamento", data: "20/11", type: "input" },
  // ];

  const total = moves?.reduce((acc, movement) => {
    return movement.type === "input"
      ? acc + movement.valor
      : acc - movement.valor;
  }, 0);

  return (
    <HomeBody>
      <HeaderDiv>
        <h1>Olá, {user.name}</h1>
        <Link to="/">
          <ion-icon name="exit-outline"></ion-icon>
        </Link>
      </HeaderDiv>
      <RegistrosDiv>
        {moves.length !== 0 ? (
          moves.map((item, index) => (
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
        {moves.length !== 0 ? (
          <Total total={total.toFixed(2)}>
            <p>SALDO</p>
            <h3>{total.toFixed(2)}</h3>
          </Total>
        ) : (
          <></>
        )}
      </RegistrosDiv>

      <EntradaSaidaDiv>
        <Link to="/nova-entrada">
          <EntradaDiv>
            <ion-icon name="add-circle-outline"></ion-icon>
            <h1>Nova Entrada</h1>
          </EntradaDiv>
        </Link>
        <Link to="/nova-saida">
          <SaidaDiv>
            <ion-icon name="add-circle-outline"></ion-icon>
            <h1>Nova Saida</h1>
          </SaidaDiv>
        </Link>
      </EntradaSaidaDiv>
    </HomeBody>
  );
}
