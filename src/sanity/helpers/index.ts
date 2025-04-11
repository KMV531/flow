import { sanityFetch } from '../lib/live'
import { ABOUT_QUERY, BLOG_QUERY, HERO_QUERY, SOLUTIONS_QUERY } from './queries'

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

export const getAbout = async () => {
  try {
    const aboutData = await sanityFetch({
      query: ABOUT_QUERY,
    })
    return aboutData?.data || []
  } catch (error) {
    console.log('Error fetching About data (index.ts):', error)
    return []
  }
}

export const getBlogs = async () => {
  try {
    const blogData = await sanityFetch({
      query: BLOG_QUERY,
    })
    return blogData?.data || []
  } catch (error) {
    console.log('Error fetching Blogs data (index.ts):', error)
    return []
  }
}
