import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header: FC = () => {
    return (
        <header className='w-screen shadow-md bg-gray-600'>            
            <nav>
                <ul className='mx-auto flex justify-start items-center max-w-7xl py-6 px-5 font-mono'>
                    <li>
                        <Link href='/'>
                            <a>
                                <Image src='/images/logo-cropped.png' width='130px' height='45px' alt='MARIO NIÑO' />
                            </a>
                        </Link>
                    </li>
                    <li className='flex-grow' />
                    <li>
                        <Link href='/contacto'>
                            <a className='bg-blue-500 font-bold text-white p-3 rounded-xl shadow-md'>
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