import { NovaEntradaBody, NovaEntradaForm, NovaEntradaFormButton } from "./styledNovaEntrada";

export default function NovaEntrada() {
    return (
        <NovaEntradaBody>
            <h1>Nova Entrada</h1>
            <NovaEntradaForm>
                <input type="number" name="valor" placeholder="Valor"/>
                <input type="text" name="descrição" placeholder="Descrição"/>
                <NovaEntradaFormButton>Salvar Entrada</NovaEntradaFormButton>
            </NovaEntradaForm>
        </NovaEntradaBody>
    )
}