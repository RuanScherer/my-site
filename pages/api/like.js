/*const redis = require('redis')
const client = redis.createClient({
  auth_pass: '8yjiZhKKE0ZJVFDD2oJqvlutCNxgGErk',
  password: '8yjiZhKKE0ZJVFDD2oJqvlutCNxgGErk',
  db: 'my-site',
  host: 'redis-10727.c245.us-east-1-3.ec2.cloud.redislabs.com',
  port: 10727,
})

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      let likes = await client.get("likes")

      if (!likes) {
        likes = 1
      } else {
        likes += 1
      }

      await client.set("likes", likes)

      return res.end(JSON.stringify({ message: 'Success!' }))
    } catch (error) {
      return res.end(JSON.stringify({ message: error }))
    }
  }

  return res.end(JSON.stringify({ message: 'Method not implemented' }))
}*/