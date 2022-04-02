import { GraphQLClient } from 'graphql-request'
import { getSdk } from './generated'
const GQLCient = new GraphQLClient('https://api.spacex.land/graphql/')
export const gqClient = getSdk(GQLCient)
