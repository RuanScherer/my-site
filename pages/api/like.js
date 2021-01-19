export default function handler(req, res) {
  if (req.method === 'POST') {
    return res.end(JSON.stringify({ message: 'Success!' }))
  }
  return res.end(JSON.stringify({ message: 'Method not implemented' }))
}