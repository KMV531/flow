import { defineQuery } from 'next-sanity'

export const HERO_QUERY = defineQuery(`*[_type == "hero"] | order(name asc)`)

export const SOLUTIONS_QUERY = defineQuery(
  `*[_type == "solutions"] | order(name asc)`
)

export const ABOUT_QUERY = defineQuery(
  `*[_type == "aboutUs"] | order(name asc)`
)

export const BLOG_QUERY = defineQuery(
  `*[_type == "blogs"] | order(_createdAt desc)`
)

export const ABOUT_PAGE_QUERY = defineQuery(
  `*[_type == "about"] | order(name asc)`
)

export const PHILOSOPHY_QUERY = defineQuery(
  `*[_type == "philosophy"] | order(name asc)`
)

export const TEAM_QUERY = defineQuery(
  `*[_type == "team"] | order(_createdAt desc)`
)
