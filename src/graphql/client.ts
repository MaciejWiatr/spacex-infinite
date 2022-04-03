import { DEFAULT_GRAPHQL_ENDPOINT } from '@constants'
import { GraphQLClient } from 'graphql-request'
import { getSdk } from './generated'
const GQLRequestClient = new GraphQLClient(DEFAULT_GRAPHQL_ENDPOINT)
export const gqClient = getSdk(GQLRequestClient)
