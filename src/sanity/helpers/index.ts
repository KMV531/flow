import { sanityFetch } from '../lib/live'
import {
  ABOUT_PAGE_QUERY,
  ABOUT_QUERY,
  BLOG_BY_SLUG_QUERY,
  BLOG_QUERY,
  HERO_QUERY,
  PHILOSOPHY_QUERY,
  PRODUCTDESIGN_QUERY,
  RD_QUERY,
  SOLUTIONS_QUERY,
  TEAM_QUERY,
} from './queries'

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

export const getAboutPage = async () => {
  try {
    const AboutPageData = await sanityFetch({
      query: ABOUT_PAGE_QUERY,
    })
    return AboutPageData?.data || []
  } catch (error) {
    console.log('Error fetching About Page data (index.ts):', error)
    return []
  }
}

export const getPhilosophy = async () => {
  try {
    const philosophyData = await sanityFetch({
      query: PHILOSOPHY_QUERY,
    })
    return philosophyData?.data || []
  } catch (error) {
    console.log('Error fetching Philosophy data (index.ts):', error)
    return []
  }
}

export const getTeam = async () => {
  try {
    const teamData = await sanityFetch({
      query: TEAM_QUERY,
    })
    return teamData?.data || []
  } catch (error) {
    console.log('Error fetching Team data (index.ts):', error)
    return []
  }
}

export const getRD = async () => {
  try {
    const RDData = await sanityFetch({
      query: RD_QUERY,
    })
    return RDData?.data || []
  } catch (error) {
    console.log('Error fetching RD data (index.ts):', error)
    return []
  }
}

export const getProductDesign = async () => {
  try {
    const ProductDesignData = await sanityFetch({
      query: PRODUCTDESIGN_QUERY,
    })
    return ProductDesignData?.data || []
  } catch (error) {
    console.log('Error fetching Product Design data (index.ts):', error)
    return []
  }
}

export const getBlogSlug = async (slug: string) => {
  try {
    const blogSlugData = await sanityFetch({
      query: BLOG_BY_SLUG_QUERY,
      params: {
        slug,
      },
    })
    return blogSlugData?.data || []
  } catch (error) {
    console.log('Error fetching Blog slug data (index.ts):', error)
    return []
  }
}
