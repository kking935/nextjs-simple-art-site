import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header: FC = () => {
    return (
        <header className='w-screen shadow-md colorDelMenu'>            
            <nav>
                <ul className='mx-auto flex justify-start items-center max-w-7xl py-6 px-5'>
                    <li>
                        <Link href='/'>
                            <a>
                                <Image src='/images/logo-cropped.png' width='130px' height='45px' alt='MARIO NIÑO' />
                            </a>
                        </Link>
                    </li>
                    <li className='flex-grow' />
                    <li>
                        <Link href='/trabajos'>
                            <a className='hidden sm:block p-3 font-bold text-white transition duration-500 hover:text-red-500  mr-24'>
                                TRABAJOS
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/#contact'>
                            <a className='bg-blue-500 font-bold text-white transition duration-500 hover:text-yellow-300 p-3 rounded-xl shadow-md'>
                                CONTACTO
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header