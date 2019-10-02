const supertest = require('supertest')
const app = require('../src/apps/api')
describe('API', () => {
  let request
  beforeEach(() => {
    request = supertest(app.listen())
  })

  it('should get api', done => {
    request.get('/api/test').expect(200, (err, res) => {
      expect(res.body.data).toHaveLength(100)
      done()
    })
  })
})
