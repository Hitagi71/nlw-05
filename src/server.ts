import express, { request, response } from 'express';

const app = express()

/**
 *  GET = Buscas
 *  POST = Criação
 *  PUT = Alteração
 *  DELETE = Deletar
 *  PATCH = Alterar um informação especifica
 */

app.get("/", (request, response) => {
    return response.json({
        message: "Olá NLW 05!"
    })
})

app.post("/users", (request, response) => {
    return response.json( {
        message: "Usuário salvo com sucesso!"
    })
})

app.listen(8080, () => console.log("Server is running on port 8080"));