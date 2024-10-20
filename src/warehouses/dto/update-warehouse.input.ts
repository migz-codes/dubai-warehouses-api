import { Warehouse } from '../entities/warehouse.entity'
import { InputType, Field, PartialType, ID } from '@nestjs/graphql'

@InputType()
export class UpdateWarehouseInput extends PartialType(Warehouse) {
  @Field(() => ID)
  id: string
}
