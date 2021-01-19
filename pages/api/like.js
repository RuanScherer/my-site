const mongoose = require('mongoose')

const Like = mongoose.model('Like', { quantity: Number })

export default async function handler(req, res) {
  if (req.method === 'POST') {
    mongoose.connect('mongodb+srv://usuario_admin:HQQkSVAaLEjLVAKX@mycluster.lcfko.mongodb.net/my-site?retryWrites=true&w=majority', {
      useNewUrlParser: true, 
      useUnifiedTopology: true
    })

    let like = await Like.findOne()

    if (!like) {
      like = new Like({ quantity: 1 })
    } else {
      like.quantity += 1
    }

    return like.save()
      .then(() => res.end(JSON.stringify({ message: 'Success!' })))
      .catch(err => res.end(JSON.stringify({ message: err })))
      .finally(() => mongoose.connection.close())
  }

  if (req.method === 'GET') {
    mongoose.connect('mongodb+srv://usuario_admin:HQQkSVAaLEjLVAKX@mycluster.lcfko.mongodb.net/my-site?retryWrites=true&w=majority', {
      useNewUrlParser: true, 
      useUnifiedTopology: true
    })

    let like = await Like.findOne()
    mongoose.connection.close()

    return res.end(JSON.stringify({ likes: like.quantity || 0 }))
  }

  return res.end(JSON.stringify({ message: 'Method not implemented' }))
}