const supertest = require('supertest')
const app = require('../src/apps/todo')

describe('Todo', () => {
  let request
  let http
  beforeEach(() => {
    request = supertest(app)
  })

  it('should get todo', done => {
    request
      .get('/todo/todos')
      .expect(200)
      .end((err, res) => {
        expect(res.body.data).toHaveLength(2)
        done()
      })
  })
})
