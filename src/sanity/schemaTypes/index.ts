import { type SchemaTypeDefinition } from 'sanity'

import { heroTypes } from './heroTypes'
import { solutionTypes } from './solutionTypes'
import { aboutTypes } from './aboutTypes'
import { blogTypes } from './blogTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroTypes, solutionTypes, aboutTypes, blogTypes],
}
