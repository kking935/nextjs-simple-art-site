import { FC } from 'react'
import Head from 'next/head'

export type LayoutProps = {
    children: FC
}
export const Layout: FC = (props) => {
    return (
        <>
            <Head>
                <title>Mario Nino</title>
            </Head>
            
            <main>
                {props.children}
            </main>
        </>
    )
}