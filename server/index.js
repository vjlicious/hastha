const express = require('express') //backend node frame
const consola = require('consola') //console logger
const { Nuxt, Builder } = require('nuxt')

const bodyParser = require('body-parser')
const cors = require('cors') //cross origin resource sharing

const app = express()

function dbserver() {
  const dbport = process.env.PORT || 5000
  app.set('dbport',dbport) 
  app.use(bodyParser.json())
  app.use(cors())
  const posts = require('./routes/api/posts')
  app.use('/api/posts', posts)
  app.listen(dbport, () => console.log(`Server started on port ${dbport}`))
}

dbserver()


const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000



app.set('port', port)
// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  // Give nuxt middleware to express
  app.use(nuxt.render)
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
