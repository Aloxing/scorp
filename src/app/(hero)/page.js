import React from 'react'
import homeJPG from "/public/home.jpg"
import Imagebg from '@/components/imagebg'

export const metadata = {
  title: "Home",
}
const content = "天行健，君子当自强不息。";
export default function page() {
  return (
   <Imagebg imgUrl={homeJPG} altTxt="home" content={content} />
  )
}
