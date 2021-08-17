import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'
import projects from '../data/gallery.json'
import films from '../data/film.json'

type GaleriaItemProps = {
  endpoint: string, 
  text: string, 
  imgSrc: string,
  key: number
}

const GaleriaItem: FC<GaleriaItemProps> = (props: GaleriaItemProps) => {
  return (
    <li key={props.key}  className=' mx-3 my-3 w-80 sm:w-96 h-100 bg-black pt-3 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:scale-105'>
      <Link href={`/fotografias/${props.endpoint}`}>
        <a>
          <p className='font-semibold text-white pl-5 pb-2'>{props.text}</p>
          <div className="w-96">
            <Image className="shadow-md" alt={props.text} src={props.imgSrc} layout='responsive' width={800} height={500} />
          </div>
        </a>
      </Link>
    </li>
  )
}


const FilmItem: FC<GaleriaItemProps> = (props: GaleriaItemProps) => {
  return (
    <li key={props.key}  className=' mx-3 my-3 w-80 sm:w-96 h-100 bg-black pt-3 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:scale-105'>
      <Link href={`/documental/${props.endpoint}`}>
        <a>
          <p className='font-semibold text-white pl-5 pb-2'>{props.text}</p>
          <div className="w-96">
            <Image className="shadow-md" alt={props.text} src={props.imgSrc} layout='responsive' width={800} height={500} />
          </div>
        </a>
      </Link>
    </li>
  )
}

export async function getStaticProps() {
  return { props: { projects, films } }
}

type GaleriaProps = {
  projects: any,
  films: any
}

const Galeria: NextPage<GaleriaProps> = (props: GaleriaProps) => {
  return (
    <Layout>
      <Head>
        <title>ESCAPARATE | Mario Niño</title>
      </Head>
      <section className='py-16 max-w-7xl mx-auto'>
        <h1 className='text-3xl font-semibold pb-5 text-center text-white'>ESCAPARATE</h1>
        <div className='text-gray-300 flex justify-start items-center'>
          <h2 className='text-xl font-semibold text-left mx-3'>Documentales</h2>
          <div className='opacity-50 bg-current h-1 rounded-2xl flex-grow' />
        </div>
        <ul className="flex flex-wrap flex-row items-center lg:items-start justify-center pt-5">
          {props.films.map((film: any, index: number) => {
            return <FilmItem key={index} endpoint={film.endpoint} text={film.title} imgSrc={film.mainImage} />
          })}
          <li className='mx-3 h-1 w-96' />
          <li className='mx-3 h-1 w-96' />
        </ul>
        <div className='text-gray-300 flex justify-start items-center mt-10'>
          <h2 className='text-xl font-semibold text-left mx-3'>Fotografias</h2>
          <div className='opacity-50 bg-current h-1 rounded-2xl flex-grow' />
        </div>
        <ul className="flex flex-wrap flex-row items-center lg:items-start justify-center pt-5">
          {props.projects.map((project: any, index: number) => {
            return <GaleriaItem key={index} endpoint={project.endpoint} text={project.title} imgSrc={project.mainImage} />
          })}
          <li className='mx-3 h-1 w-96' />
          <li className='mx-3 h-1 w-96' />
        </ul>
      </section>
    </Layout>
  )
}

export default Galeria
