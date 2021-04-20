import express from 'express';

import "./database";
import { routes } from './routes'


/**
 *  GET = Buscas
 *  POST = Criação
 *  PUT = Alteração
 *  DELETE = Deletar
 *  PATCH = Alterar um informação especifica
 */

const app = express()

app.use(express.json())
app.use(routes)

app.listen(8080, () => console.log("Server is running on port 8080"));