import { type SchemaTypeDefinition } from 'sanity'

import { heroTypes } from './heroTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroTypes],
}
