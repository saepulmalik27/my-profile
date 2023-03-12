import { AppProps } from 'next/app'
import '@/styles/globals.css'
import React from 'react'
import { ThemeProvider } from "next-themes";

function MyApp({ Component , pageProps } : AppProps) {
  return  <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
}

export default MyApp
