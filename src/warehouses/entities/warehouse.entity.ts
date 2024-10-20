import { ObjectType, Field, ID } from '@nestjs/graphql'
import { Warehouse as PrismaWarehouse } from '@prisma/client'

@ObjectType()
export class Warehouse implements PrismaWarehouse {
  @Field(() => ID)
  id: string

  @Field(() => String)
  name: string
}
