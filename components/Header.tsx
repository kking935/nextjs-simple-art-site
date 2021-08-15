import { FC } from 'react'
import Link from 'next/link'

const Header: FC = () => {
    return (
        <>            
            <nav className='w-screen shadow-md'>
                <ul className='mx-auto flex justify-start items-center max-w-7xl py-6 px-5'>
                    <li>
                        <h1 className='font-extrabold text-2xl'>Mario Nino</h1>
                    </li>
                    <li className='flex-grow' />
                    <li>
                        <Link href='/contacto'>
                            <a className='bg-blue-500 font-bold text-white p-3 rounded-xl shadow-md'>
                                Contacto
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header