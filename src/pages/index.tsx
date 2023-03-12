
import Layout from '@/hoc/layouts'
import HomeView from '@/modules/home'
import Head from 'next/head'



export default function Home() {
  return (
    < >
      <Head>
        <title>Saepul Malik</title>
        <meta name="description" content="Saepul Malik Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
       <HomeView/>
      </Layout>
     
    </>
  )
}
