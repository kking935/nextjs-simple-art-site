import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import Divider from '../components/Divider'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Contact from '../components/Contact'
import { GalleryIcon } from '../components/Icons'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='animate-fadeIn text-white'>
        <section className='pt-16 px-5 sm:px-16 max-w-7xl mx-auto'>
        <div className="pb-10">
          <div className="text-center animate-slideLeft">
            <Image className="rounded-full" src='/images/mario-headshot.png' alt='Mario Niño' width={300} height={300} />
          </div>
          <div className="flex justify-center items-center">
            <h1 className='animate-slideTop mt-5 text-4xl md:text-5xl text-yellow-300 font-semibold'>
              Bienvenidos
            </h1>
          </div>
        </div>
        <Divider black={false} />
        <div className='pb-24 text-md md:text-lg'>
          <p className='mt-10 text-lg md:text-xl'>
            👋 Hola, me llamo <b>Mario Niño</b>.
          </p>
          
          <p className='mt-8'>
            Yo soy un productor y realizador independiente con 15 años dedicados a la realización audiovisual. Mi trabajo se mueve entre el cine, la fotografía y el video experimental.
          </p>
          <p className='mt-8'>
            He sido ganador de varias becas de creación artística con las que he producido diferentes trabajos y he trabajado para la TV pública colombiana como realizador de la serie documental “HECHOS DE CORAZÓN”.
          </p>
          {/* <p className='mt-8'>
            Mi último trabajo es un documental titulado MEMORIAS DE GUAMOC, ganador en la competencia de documental del Festival Internacional de cine corto de Popayán 2019, documental que aborda la violencia ejercida por grupos armados en Colombia. 
          </p> */}
          <p className='mt-8'>
            He sido docente de educación formal e informal. Actualmente trabajo como freelance para agencias de publicidad y corporaciones en la producción de piezas audiovisuales.
          </p>
        </div>
      </section>

        <section className='px-8 pt-40 pb-64 bg-gradient-to-t from-gray-700 to-gray-900'>
          <div className='max-w-3xl mx-auto'>
            <h2 className='text-center mb-10 italic text-2xl font-semibold'>
              CAPTURO LA BELLEZA DE COLOMBIA Y DEL MUNDO
            </h2>
            <AutoplaySlider
              play={true}
              cancelOnInteraction={false} // should stop playing on user interaction
              interval={5000}
              bullets={false}
            >
              <div>
                <Image src='/images/flag.jpg' alt='' layout='fill' />
              </div>
              <div>
                <Image src='/images/dust.jpg' alt='' layout='fill' />
              </div>
              <div>
                <Image src='/images/ruta.jpg' alt='' layout='fill' />
              </div>
              <div>
                <Image src='/images/corazon.jpg' alt='' layout='fill' />
              </div>
            </AutoplaySlider>
            <Link href='/trabajos'>
              <a className='font-semibold w-44 float-right flex flex-row justify-evenly items-center bg-blue-500 py-3 px-1 rounded-xl mt-5 text-sm'>
                <GalleryIcon />
                Ver Trabajos
              </a>
            </Link>
          </div>

        </section>

        <section className='px-8 pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-48 flex flex-col items-center justify-center bg-gradient-to-b from-gray-700 to-gray-900' id='contact'>
          <Contact />
        </section>
      </div>
    </Layout>
  )
}

export default Home
