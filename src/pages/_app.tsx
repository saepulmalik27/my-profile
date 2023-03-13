import { AppProps } from 'next/app'
import '@/styles/globals.css'
import React from 'react'
import { ThemeProvider } from "next-themes";
import NextProgress from '@/components/next-progress';


function MyApp({ Component , pageProps } : AppProps) {
  return <>
  <ThemeProvider enableSystem={true} attribute="class">
    <NextProgress/>
          <Component {...pageProps} />
        </ThemeProvider>
  </>
}

export default MyApp
