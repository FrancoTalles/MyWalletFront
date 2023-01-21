import { NovaEntradaForm } from "../NovaEntrada/styledNovaEntrada";
import { NovaSaidaBody, NovaSaidaFormButton } from "./styledNovaSaida";

export default function NovaSaida() {
  return (
    <NovaSaidaBody>
      <h1>Nova Saída</h1>
      <NovaEntradaForm>
        <input type="number" name="valor" placeholder="Valor" />
        <input type="number" name="descrição" placeholder="Descrição" />
        <NovaSaidaFormButton>Salvar Saída</NovaSaidaFormButton>
      </NovaEntradaForm>
    </NovaSaidaBody>
  );
}
