import { Router } from "express"
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

/**
 * Tipos de parametros
 * Routes Params => Parametros de rotas
 * http://localhost:8080/settings/1
 * Query Params => Filtros e buscas
 * http://localhost:8080/settings/1?search=algumacoisa
 * Body Params => {
 * }
 */


const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);

routes.post("/message", messagesController.create)
routes.get("/message/:id", messagesController.showByUser)



export { routes };