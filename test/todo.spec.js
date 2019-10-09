const supertest = require('supertest')
const app = require('../src/apps/todo')

describe('Todo', () => {
  let request
  beforeEach(() => {
    request = supertest(app.listen())
  })
  afterEach(() => {
    app.close()
  })
  it('should get todo', done => {
    request.get('/todo/todos').expect(200, (err, res) => {
      expect(res.body.data).toHaveLength(2)
      done()
    })
  })
})
