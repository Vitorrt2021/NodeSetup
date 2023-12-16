import supertest from 'supertest'
import app from '@/app'

describe('GET /users', () => {
  const application = supertest(app)

  it('should return 200', async () => {
    const response = await application.get('/users')

    expect(response.status).toBe(200)
  })
})
