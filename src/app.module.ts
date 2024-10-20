import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphqlModule } from './graphql/graphql.module'
import { WarehousesModule } from './warehouses/warehouses.module'
import { PrismaModule } from './prisma/prisma.module'
import { PrismaService } from './prisma/prisma.service'

@Module({
  imports: [GraphqlModule, WarehousesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService]
})
export class AppModule {}
