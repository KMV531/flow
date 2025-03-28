import { type SchemaTypeDefinition } from 'sanity'

import { heroTypes } from './heroTypes'
import { solutionTypes } from './solutionTypes'
import { aboutTypes } from './aboutTypes'
import { resultTypes } from './resultTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroTypes, solutionTypes, aboutTypes, resultTypes],
}
