import About from 'components/about'
import Hero from 'components/Hero'
import Section from 'components/section'
import Layout from 'hoc/layouts'
import Head from 'next/head'



export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
      
       <Hero/>
    
          
       
       
         <About/>
       
      </Layout>
     
    </div>
  )
}
