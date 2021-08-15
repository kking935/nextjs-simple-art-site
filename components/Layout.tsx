import { FC } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export type LayoutProps = {
    children: FC
}

const Layout: FC = (props) => {
    return (
        <>
            <Head>
                <title>Mario Nino</title>
            </Head>
            
            <Header />
            <main className='w-screen min-h-screen bg-gray-400'>
                <div className='px-10 pt-10 mx-auto max-w-7xl'>
                    {props.children}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Layout