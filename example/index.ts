import * as Hapi from '@hapi/hapi'
import Plugin from '../src'

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  })

  await server.register({
    // @ts-ignore
    plugin: Plugin,
    options: {},
  })

  server.route({
    method: 'GET',
    path: '/hello',
    handler: (request, h) => {
      return {
        message: 'Hello World!',
      }
    },
  })

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
