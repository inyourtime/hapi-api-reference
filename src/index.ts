import { Server } from '@hapi/hapi'

import Package from '../package.json'
import type { HapiApiReferenceOptions } from './types'

const hapiApiReference = async (
  server: Server,
  options: HapiApiReferenceOptions
) => {
  server.route({
    method: 'GET',
    path: '/reference',
    handler: (request, h) => {
      return {
        message: 'Hello World!',
        options
      }
    }
  })
}

export default {
  register: hapiApiReference,
  name: Package.name,
  version: Package.version
}
