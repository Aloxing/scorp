import {Metadata} from "next"
import { Comforter } from "next/font/google"
import "./globals.css"

const comforter = Comforter({ subsets:["latin"],weight:"400" });

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={comforter.className}>
        {children}
      </body>
    </html>
  )
}
