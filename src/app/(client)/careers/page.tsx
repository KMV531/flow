import { getProductDesign, getRD } from '@/sanity/helpers'
import ProductDesign from '@/sections/CareersPage/ProductDesign'
import RD from '@/sections/CareersPage/RD'
import React from 'react'

const CareersPage = async () => {
  const Rd = await getRD()
  const productDesign = await getProductDesign()

  return (
    <>
      <RD Rd={Rd} />
      <ProductDesign productDesign={productDesign} />
    </>
  )
}

export default CareersPage
