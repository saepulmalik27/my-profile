import Layout from '@/hoc/layouts'
import BlogPage from '@/modules/blog'

import Head from 'next/head'



export default function Blog() {
  return (
    < >
      <Head>
        <title>Saepul Malik | Blog</title>
        <meta name="description" content="Saepul Malik Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
       <BlogPage/>
      </Layout>
     
    </>
  )
}