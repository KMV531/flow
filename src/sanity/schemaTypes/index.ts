import { type SchemaTypeDefinition } from 'sanity'

import { heroTypes } from './heroTypes'
import { solutionTypes } from './solutionTypes'
import { aboutTypes } from './aboutTypes'
import { blogTypes } from './blogTypes'
import { aboutPageTypes } from './AboutPage/aboutType'
import { philosophyTypes } from './AboutPage/philosophyTypes'
import { teamTypes } from './AboutPage/teamTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroTypes,
    solutionTypes,
    aboutTypes,
    blogTypes,
    aboutPageTypes,
    philosophyTypes,
    teamTypes,
  ],
}
