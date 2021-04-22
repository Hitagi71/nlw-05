import { http } from './http'
import "./websocket/client"

/**
 *  GET = Buscas
 *  POST = Criação
 *  PUT = Alteração
 *  DELETE = Deletar
 *  PATCH = Alterar um informação especifica
 */

http.listen(8080, () => console.log("Server is running on port 8080"));