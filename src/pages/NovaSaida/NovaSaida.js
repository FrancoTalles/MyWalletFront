import {
  NovaSaidaBody,
  NovaSaidaForm,
  NovaSaidaFormButton,
} from "./styledNovaSaida";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import env from "react-dotenv";
import UserContext from "../../contexts/UserContext";
export default function NovaSaida() {
  const { user } = useContext(UserContext);

  const [form, setForm] = useState({
    userId: `${user.userId}`,
    valor: "",
    descricao: "",
    data: dayjs().format("DD/MM"),
    type: "output",
  });

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const navigate = useNavigate();

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function fazerSaida(event) {
    event.preventDefault();
    console.log("Fazendo Saida");
    const promise = axios.post(
      `${env.REACT_APP_API_URL}/nova-saida`,
      form,
      config
    );

    promise.then((resposta) => {
      navigate("/home");
    });

    promise.catch((err) => {
      alert(err.response.data);
    });
  }

  return (
    <NovaSaidaBody>
      <h1>Nova Saída</h1>
      <NovaSaidaForm onSubmit={fazerSaida}>
        <input
          type="number"
          name="valor"
          placeholder="Valor"
          required
          onChange={handleForm}
          value={form.valor}
        />
        <input
          type="text"
          name="descricao"
          placeholder="Descrição"
          required
          onChange={handleForm}
          value={form.descricao}
        />
        <NovaSaidaFormButton type="submit">Salvar Saída</NovaSaidaFormButton>
      </NovaSaidaForm>
    </NovaSaidaBody>
  );
}
