import type { NextPage } from 'next'
import Layout from '../../components/Layout'
import Gallery from 'react-photo-gallery';
import Link from 'next/link'
import Divider from '../../components/Divider'
import gallery from '../../data/galeria.json'

export async function getStaticPaths() {
  let paths = []
  for (let i = 0; i < gallery.length; i++) {
    paths.push({params: { id: gallery[i].puntoFinal }})
  }

  return { paths, fallback: false }
}

export async function getStaticProps(props: {params: {id: string}}) {
  let project: any = ''
  for (let i = 0; i < gallery.length; i++) {
    if (gallery[i].puntoFinal === props.params.id) {
      project = gallery[i]
      break
    }
  }

  return { props: { project } }
}

type ProjectProps = {
  project: {
    titulo: string,
    fotos: any,
    descripcion: string[]
  }
}

const GaleriaPage: NextPage<ProjectProps> = (props: ProjectProps) => {
  console.log(props.project.fotos)
  return (
    <Layout>
      <section className='text-center mx-auto max-w-7xl pt-10 pb-24 px-8 md:px-16'>
        <div className='pb-10 text-left'>
          <Link href='/trabajos'>
            <a className=' hover:buttonTextColor text-current'>Trabajos</a>
          </Link>
          <p className='inline-block mx-1'> / </p>
          <p className='cursor-default inline-block font-semibold'>{props.project.titulo}</p>
        </div>
        <h1 className='text-3xl font-semibold pb-10'>{props.project.titulo}</h1>

        <Divider />
        <section className='px-3 sm:px-10'>
            <div className='pt-10'>
              <Gallery photos={props.project.fotos} />
            </div>
            {props.project.descripcion.map((text) => {
              return (
                <p className='text-left mt-10'>{text}</p>
              )
            })}
        </section>
      </section>
    </Layout>
  )
}

export default GaleriaPage