import { Router } from "express";
import {deleteToDo, getToDo, saveToDo, updateToDo} from "../controllers/ToDoController.js"

const router = Router();

router.get('/',getToDo)
router.post('/save',saveToDo)
router.post('/delete',deleteToDo)
router.put('/update',updateToDo)

const routes = router;

export default routes;
