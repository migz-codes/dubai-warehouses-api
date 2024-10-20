import { ObjectType, Field, ID } from '@nestjs/graphql'

@ObjectType()
export class Warehouse {
  @Field(() => ID)
  id: string

  @Field(() => String)
  name: string
}
