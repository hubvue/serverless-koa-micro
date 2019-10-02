class Todo {
  constructor() {}
  getTodo() {
    const data = {
      id: 1,
      message: 'todo1'
    }
    return data
  }
  getTodos() {
    const data = [
      {
        id: 1,
        message: 'todo1123'
      },
      {
        id: 2,
        message: 'todo2'
      }
    ]
    return data
  }
}
module.exports = Todo
