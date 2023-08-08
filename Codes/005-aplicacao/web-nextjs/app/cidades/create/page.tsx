'use client'

import Input from "@/app/components/forms/Input";

export default function CidadeCreate() {

    return(
        <main className="container m-auto">

            <h1>Cadastro de cidade</h1>

            <form>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <Input
                        name="nome"
                        setValue={() => {}}
                    />
                </div>

                <div>
                    <label htmlFor="nome">Estado</label>
                    <Input
                        name="estado"
                        setValue={() => {}}
                    />
                </div>

                <div>
                    <button type="submit">Cadastrar</button>
                    <button type="reset">Limpar</button>
                    <button type="button">Voltar</button>
                </div>

            </form>

        </main>
    )

}