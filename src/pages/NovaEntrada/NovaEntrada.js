import {
  NovaEntradaBody,
  NovaEntradaForm,
  NovaEntradaFormButton,
} from "./styledNovaEntrada";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import env from "react-dotenv";
import UserContext from "../../contexts/UserContext";
export default function NovaEntrada() {
  const { user } = useContext(UserContext);

  const [form, setForm] = useState({
    userId: `${user.userId}`,
    valor: "",
    descricao: "",
    data: dayjs().format("DD/MM"),
    type: "input",
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

  function fazerEntrada(event) {
    event.preventDefault();
    console.log("Fazendo Entrada");
    const promise = axios.post(
      `${env.REACT_APP_API_URL}/nova-entrada`,
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
    <NovaEntradaBody>
      <h1>Nova Entrada</h1>
      <NovaEntradaForm onSubmit={fazerEntrada}>
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
        <NovaEntradaFormButton type="submit">
          Salvar Entrada
        </NovaEntradaFormButton>
      </NovaEntradaForm>
    </NovaEntradaBody>
  );
}
