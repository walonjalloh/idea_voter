import express from 'express'
import { getTodo,updateTodo,deleteTodo,createTodo } from '../controllers/ideaController.js'

export const ideaRouter = express.Router()

ideaRouter.route('/').get(getTodo).post(createTodo)
ideaRouter.route('/:id').delete(deleteTodo).patch(updateTodo)