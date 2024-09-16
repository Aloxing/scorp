import React from 'react'
import Imagebg from '@/components/imagebg'
import Img03 from "/public/img03.jpg"

export const metadata = {
  title: "Scale",
}

export default function Scale() {
  return (
    <Imagebg imgUrl={Img03} altTxt="Scale" content="" />
  );
}
