import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'node:path'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      playground: true,

      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'generated/schema.gql')
    })
  ]
})
export class GraphqlModule {}
