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
            <Image className="rounded-full" src='/images/mario-headshot.png' width={300} height={300} />
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
            Soy camarógrafo y creador digital.
          </p>
          <p className='mt-5 '>
            Me gradué magna cum laude de la Facultad de Ingeniería de Virginia Tech con una licenciatura en Ciencias de la Computación. Completé mi título un año antes, tiempo en el que jugué fútbol de la División 1 para los Hokies en mi primer año, realicé una investigación de pregrado para la universidad en mi segundo año y trabajé para una startup en etapa temprana en mi tercer año.
          </p>
          <p className='mt-5 '>
            Actualmente trabajo a tiempo parcial para Vector Rideshare al mismo tiempo que persigo una educación superior y mis propios esfuerzos tecnológicos.
          </p>
        </div>
      </section>

        <section className='px-8 pt-40 pb-64 bg-gradient-to-t from-gray-700 to-gray-900'>
          <div className='max-w-3xl mx-auto'>
            <h2 className='text-center mb-16 italic text-2xl font-semibold'>
              CAPTURANDO LA BELLEZA DE COLOMBIA
            </h2>
            <AutoplaySlider
              play={true}
              cancelOnInteraction={false} // should stop playing on user interaction
              interval={5000}
              bullets={false}
            >
              <div>
                <Image src='/images/flag.jpg' layout='fill' />
              </div>
              <div>
                <Image src='/images/train.jpg' layout='fill' />
              </div>
              <div>
                <Image src='/images/documentary.jpg' layout='fill' />
              </div>
              <div>
                <Image src='/images/working.png' layout='fill' />
              </div>
            </AutoplaySlider>
            <Link href='/galeria'>
              <a className='w-40 float-right flex flex-row justify-evenly items-center bg-blue-500 p-3 rounded-xl mt-5 text-sm'>
                <GalleryIcon />
                Ver Galería
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
