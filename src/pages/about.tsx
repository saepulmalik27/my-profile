
import Layout from '@/hoc/layouts'
import AboutPage from '@/modules/about'

import Head from 'next/head'



export default function About() {
  return (
    < >
      <Head>
        <title>Saepul Malik | About</title>
        <meta name="description" content="Saepul Malik About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <AboutPage/>
      </Layout>
     
    </>
  )
}