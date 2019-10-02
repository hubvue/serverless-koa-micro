class TodoController {
  constructor(todo) {
    this.todo = todo
  }
  getTodo() {
    const data = this.todo.getTodo()
    return async (ctx, next) => {
      ctx.body = {
        code: 200,
        message: 'success',
        data
      }
    }
  }
  getTodos() {
    const data = this.todo.getTodos()
    return async (ctx, next) => {
      ctx.body = {
        code: 200,
        message: 'success',
        data
      }
    }
  }
}
module.exports = TodoController
