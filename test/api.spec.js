const supertest = require('supertest')
const app = require('../src/apps/api')
describe('API', () => {
  let request
  let http

  beforeEach(() => {
    http = app.listen()
    request = supertest(http)
  })
  it('should get api', done => {
    request
      .get('/api/test')
      .expect(200)
      .end((err, res) => {
        expect(res.body.data).toHaveLength(100)
        done()
      })
  })
})
