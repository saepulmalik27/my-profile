
import Layout from '@/hoc/layouts'
import AboutPage from '@/modules/about'
import CarreerPage from '@/modules/carreer'

import Head from 'next/head'



export default function About() {
  return (
    < >
      <Head>
        <title>Saepul Malik | Carreer</title>
        <meta name="description" content="Saepul Malik Carreer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <CarreerPage/>
      </Layout>
     
    </>
  )
}