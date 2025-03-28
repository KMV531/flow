import { type SchemaTypeDefinition } from 'sanity'

import { heroTypes } from './heroTypes'
import { solutionTypes } from './solutionTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroTypes, solutionTypes],
}
