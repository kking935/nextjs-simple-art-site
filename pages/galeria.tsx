import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Image from 'next/image'
import Divider from '../components/Divider'
import Link from 'next/link'
import { FC } from 'react'
import projects from '../data/gallery.json'

type GaleriaItemProps = {
  endpoint: string, 
  text: string, 
  imgSrc: string
}

const GaleriaItem: FC<GaleriaItemProps> = (props: GaleriaItemProps) => {
  return (
    <Link href={`/galeria/${props.endpoint}`}>
      <a className=' mx-3 my-3 w-80 sm:w-96 h-100 bg-black pt-3 rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:scale-105'>
        <p className='font-semibold text-white pl-5 pb-2'>{props.text}</p>
        <div className="w-96">
          <Image className="shadow-md" src={props.imgSrc} layout='responsive' width={800} height={500} />
        </div>
      </a>
    </Link>
  )
}

export async function getStaticProps() {
  return { props: { projects } }
}

type GaleriaProps = {
  projects: any
}

const Galeria: NextPage<GaleriaProps> = (props: GaleriaProps) => {
  return (
    <Layout>
      <section className='py-16 max-w-7xl mx-auto'>
        <h1 className='text-3xl font-semibold pb-5 text-center text-white'>GALERÍA</h1>
        <div className="flex flex-wrap flex-row items-center lg:items-start justify-center pt-5">
          {props.projects.map((project: any) => {
            return <GaleriaItem endpoint={project.endpoint} text={project.title} imgSrc={project.mainImage} />
          })}
          <div className='mx-3 h-1 w-96' />
          <div className='mx-3 h-1 w-96' />
        </div>
      </section>
    </Layout>
  )
}

export default Galeria
