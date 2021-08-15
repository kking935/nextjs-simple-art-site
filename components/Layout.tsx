import { FC } from 'react'
import Head from 'next/head'
import Header from './Header'

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
            <main>
                {props.children}
            </main>
        </>
    )
}

export default Layout