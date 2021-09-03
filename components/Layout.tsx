import { FC } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import ThemeSelector from './ThemeSelector'

export type LayoutProps = {
    children: any
}

const Layout: FC<LayoutProps> = (props: LayoutProps) => {
    return (
        <div className='font-mono overflow-x-hidden text-black colorDeTexto'>
            <Head>
                <title>Mario Niño</title>
            </Head>
            
            <ThemeSelector />
            <Header />
            <main className='w-screen min-h-screen colorDePortada'>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout