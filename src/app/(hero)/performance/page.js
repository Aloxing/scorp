import React from 'react'
import Imagebg from '@/components/imagebg'
import Img01 from "/public/img01.jpg"

export const metadata = {
  title: "Performance",
}
export default function Performance() {
  return (
    <Imagebg imgUrl={Img01} altTxt="Performance" content="" />
  )
}
