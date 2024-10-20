import { Module } from '@nestjs/common'
import { WarehousesService } from './warehouses.service'
import { WarehousesResolver } from './warehouses.resolver'
import { PrismaService } from '../prisma/prisma.service'

@Module({
  providers: [WarehousesResolver, WarehousesService, PrismaService]
})
export class WarehousesModule {}
