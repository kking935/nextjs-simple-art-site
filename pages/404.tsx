import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link'
import { QuestionIcon } from '../components/Icons';

export default function Custom404() {
	return (
		<Layout>
			<Head>
				<title>Página no encontrada</title>
			</Head>

				<section className='text-center'>
					<div className='pb-16 flex flex-col justify-center items-center text-white'>
						<QuestionIcon className='my-10 w-16 h-16' />
						<p className='px-5 text-xl font-semibold'>Página no encontrada</p>
					</div>
                    <Link href='/'>
                        <a className='p-3 rounded-xl shadow-md bg-blue-500'>Regresar a la página principal</a>
                    </Link>
				</section>
		</Layout>
	);
}