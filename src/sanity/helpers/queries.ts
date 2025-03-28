import { defineQuery } from 'next-sanity'

export const HERO_QUERY = defineQuery(`*[_type == "hero"] | order(name asc)`)

export const SOLUTIONS_QUERY = defineQuery(
  `*[_type == "solutions"] | order(name asc)`
)
