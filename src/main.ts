import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ExpressAdapter } from '@nestjs/platform-express'
import express from 'express'

async function bootstrap() {
  const server = express()
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server))
  app.setGlobalPrefix('api')
  await app.init()
  return server
}

bootstrap().then(server => {
  server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
  })
})
