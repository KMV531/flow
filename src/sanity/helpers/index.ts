import { sanityFetch } from '../lib/live'
import { HERO_QUERY, SOLUTIONS_QUERY } from './queries'

export const getHero = async () => {
  try {
    const heroData = await sanityFetch({
      query: HERO_QUERY,
    })
    return heroData?.data || []
  } catch (error) {
    console.log('Error fetching Hero data (index.ts):', error)
    return []
  }
}

export const getSolutions = async () => {
  try {
    const solutionsData = await sanityFetch({
      query: SOLUTIONS_QUERY,
    })
    return solutionsData?.data || []
  } catch (error) {
    console.log('Error fetching Solutions data (index.ts):', error)
    return []
  }
}
