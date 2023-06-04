let adicionar_notas = document.querySelector(".btn_notas_adicionar")
let body = document.querySelector("body")
let fundo_nota = document.querySelector(".fundo_nota")
let org = document.querySelector(".org")
let memoria_nome_notas = []
let memoria_autor_notas = []

adicionar_notas.addEventListener("click", () => {
    let apresentaçao_nota = document.createElement("div")
    let titulo1_nota = document.createElement("h1")
    let campo1_nota = document.createElement("input")
    let titulo2_nota = document.createElement("h1")
    let campo2_nota = document.createElement("input")
    let btn_confirme_nota = document.createElement("button")
    let btn_cancelar_nota = document.createElement("button")

    apresentaçao_nota.setAttribute("class", "apr_nota")
    titulo1_nota.setAttribute("class", "titulo_nota")
    campo1_nota.setAttribute("type", "text")
    campo1_nota.setAttribute("placeholder", "nome da nota")
    campo1_nota.setAttribute("maxlength", "25")
    campo1_nota.setAttribute("class", "campo_nota")
    campo2_nota.setAttribute("placeholder", "nome do autor")
    titulo2_nota.setAttribute("class", "titulo_nota")
    campo2_nota.setAttribute("type", "text")
    campo2_nota.setAttribute("class", "campo_nota")
    campo2_nota.setAttribute("maxlength", "20")
    btn_confirme_nota.setAttribute("class", "btn_confirme_notas")
    btn_cancelar_nota.setAttribute("class", "btn_cancelar_notas")

    titulo1_nota.textContent = "Qual será o nome da Nota?"
    titulo2_nota.textContent = "Nome do autor?"
    btn_confirme_nota.textContent = "criar"
    btn_cancelar_nota.textContent = "cancelar"

    body.appendChild(apresentaçao_nota)
    apresentaçao_nota.appendChild(titulo1_nota)
    apresentaçao_nota.appendChild(campo1_nota)
    apresentaçao_nota.appendChild(titulo2_nota)
    apresentaçao_nota.appendChild(campo2_nota)
    apresentaçao_nota.appendChild(btn_confirme_nota)
    apresentaçao_nota.appendChild(btn_cancelar_nota)

    btn_confirme_nota.addEventListener("click", (e) => {
        e.preventDefault()
        const nota_valor = campo1_nota.value
        const autor_valor = campo2_nota.value
        console.log(memoria_nome_notas)
        console.log(memoria_autor_notas)

        memoria_nome_notas.push("+1 nota nome: " + nota_valor)
        memoria_autor_notas.push("+1 nota autor: " + autor_valor)

        if (nota_valor.length <= 1) {
            window.alert("É necessário ter pelo menos 2 caracteres"
                + "no campo 'nome da nota'")
        }
        else {
            apresentaçao_nota.remove()
            let base_nota = document.createElement("div")
            let sair_nota = document.createElement("button")
            let guardar_nota = document.createElement("button")
            let escrita_campo_nota = document.createElement("textarea")
            base_nota.setAttribute("class", "base_nota")
            sair_nota.setAttribute("class", "sair_nota")
            guardar_nota.setAttribute("class","guardar_nota")
            escrita_campo_nota.setAttribute("rows", "20")
            escrita_campo_nota.setAttribute("cols", "20px")
            sair_nota.textContent = "X"
            guardar_nota.textContent = "X"
            body.appendChild(base_nota)
            base_nota.appendChild(sair_nota)
            base_nota.appendChild(guardar_nota)
            base_nota.appendChild(escrita_campo_nota)


            let nota_salva = document.createElement("div")
            let nome_nota_salva = document.createElement("p")
            let autor_nota_salva = document.createElement("p")
            nota_salva.setAttribute("class", "nota_salva")
            nome_nota_salva.setAttribute("class", "titulo-da-nota-salva")
            autor_nota_salva.setAttribute("class", "nome-do-autor-salva")
            nome_nota_salva.textContent = nota_valor
            autor_nota_salva.textContent = autor_valor
            org.appendChild(nota_salva)
            nota_salva.appendChild(nome_nota_salva)
            nota_salva.appendChild(autor_nota_salva)

            sair_nota.addEventListener("click", () => {
                let salvar_aviso = document.createElement("div")
                let texto_salvar_aviso = document.createElement("p")
                let botao_s_salvar_aviso = document.createElement("button")
                let botao_n_salvar_aviso = document.createElement("button")

                salvar_aviso.setAttribute("class", "salvar_aviso")
                texto_salvar_aviso.setAttribute("class", "texto_salvar_aviso")
                botao_s_salvar_aviso.setAttribute("class", "botao_s_salvar_aviso")
                botao_n_salvar_aviso.setAttribute("class", "botao_n_salvar_aviso")

                texto_salvar_aviso.textContent = "Você deseja salvar o arquivo " + nota_valor + "?"
                botao_s_salvar_aviso.textContent = "salvar"
                botao_n_salvar_aviso.textContent = "não salvar"
                body.appendChild(salvar_aviso)
                salvar_aviso.appendChild(texto_salvar_aviso)
                salvar_aviso.appendChild(botao_s_salvar_aviso)
                salvar_aviso.appendChild(botao_n_salvar_aviso)

                botao_n_salvar_aviso.addEventListener("click", () => {
                    salvar_aviso.remove()
                    memoria_autor_notas.pop()
                    memoria_nome_notas.pop()
                    base_nota.remove()

                    let excluir_opcional = document.createElement("button")
                    excluir_opcional.setAttribute("class", "excluir_opcional")
                    excluir_opcional.textContent = "X"
                    nota_salva.appendChild(excluir_opcional)


                    excluir_opcional.addEventListener("click", () => {
                        nota_salva.remove()
                    })
                })

                botao_s_salvar_aviso.addEventListener("click", () => {
                    salvar_aviso.remove()
                    sair_nota.remove()
                    guardar_nota.style = "display:block;"
                    base_nota.style = "display:none;"
                    
                    let continuar_opcional = document.createElement("buttom")
                    continuar_opcional.setAttribute("class", "continuar_opcional")
                    continuar_opcional.textContent = "abrir"
                    nota_salva.appendChild(continuar_opcional)

                    continuar_opcional.addEventListener("click",()=>{
                        base_nota.style = "display:inline-block"
                    })

                    guardar_nota.addEventListener("click",()=>{
                        base_nota.style ="display:none"
                    })
                })

            })
        }
    })



    btn_cancelar_nota.addEventListener("click", () => {
        apresentaçao_nota.remove()
        console.log(memoria_autor_notas)
        console.log(memoria_nome_notas)
    })
})
