import Header from '@/components/header'
import React from 'react'

type LayoutProps = {
    children : React.ReactNode
}

const Layout : React.FC<LayoutProps> = ({children} ) => {
    return (
       <>
       <Header/>
        <main className='max-w-7xl w-full  flex flex-col flex-1' >
            {children}
        </main>
       </>
    )
}


export default Layout
