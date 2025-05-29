import express from 'express';
import { getAllTasks, createTask, deleteTask, updateTask, getOneTask } from '../controllers/controller.js';


const router = express.Router();

router.get("/", getAllTasks);
router.get('/:id', getOneTask);
router.post('/', createTask);
router.delete('/:id', deleteTask);
router.put("/:id", updateTask);

export default router;