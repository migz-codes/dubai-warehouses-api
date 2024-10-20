import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql'
import { WarehousesService } from './warehouses.service'
import { Warehouse } from './entities/warehouse.entity'
import { CreateWarehouseInput } from './dto/create-warehouse.input'
import { UpdateWarehouseInput } from './dto/update-warehouse.input'

@Resolver(() => Warehouse)
export class WarehousesResolver {
  constructor(private readonly warehousesService: WarehousesService) {}

  @Mutation(() => Warehouse, { nullable: true })
  async createWarehouse(@Args('input') input: CreateWarehouseInput) {
    return this.warehousesService.create(input)
  }

  @Query(() => [Warehouse], { name: 'warehouses', nullable: true })
  async findAll() {
    return this.warehousesService.findAll()
  }

  @Query(() => Warehouse, { name: 'warehouse', nullable: true })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return this.warehousesService.findOne(id)
  }

  @Mutation(() => Warehouse, { nullable: true })
  async updateWarehouse(@Args('input') input: UpdateWarehouseInput) {
    return this.warehousesService.update(input)
  }

  @Mutation(() => Warehouse, { nullable: true })
  async removeWarehouse(@Args('id', { type: () => ID }) id: string) {
    return this.warehousesService.remove(id)
  }
}
