const supertest = require('supertest')
const app = require('../src/apps/api')
describe('API', () => {
  let request
  let http

  beforeEach(() => {
    request = supertest(app)
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
