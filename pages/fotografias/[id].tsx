import type { NextPage } from 'next'
import Layout from '../../components/Layout'
import Gallery from 'react-photo-gallery';
import Link from 'next/link'
import Divider from '../../components/Divider'
import gallery from '../../data/gallery.json'

export async function getStaticPaths() {
  let paths = []
  for (let i = 0; i < gallery.length; i++) {
    paths.push({params: { id: gallery[i].endpoint }})
  }

  return { paths, fallback: false }
}

export async function getStaticProps(props: {params: {id: string}}) {
  let project: any = ''
  for (let i = 0; i < gallery.length; i++) {
    if (gallery[i].endpoint === props.params.id) {
      project = gallery[i]
      break
    }
  }

  return { props: { project } }
}

type ProjectProps = {
  project: {
    title: string,
    photos: any,
    description: string
  }
}

const GaleriaPage: NextPage<ProjectProps> = (props: ProjectProps) => {
  return (
    <Layout>
      <section className='text-center mx-auto max-w-7xl pt-10 pb-24 px-8 md:px-16'>
        <div className='pb-10 text-left text-gray-400'>
          <Link href='/escaparate'>
            <a className=' hover:text-blue-400 text-current'>Escaparate</a>
          </Link>
          <p className='inline-block mx-1'> / </p>
          <p className='cursor-default inline-block font-semibold'>{props.project.title}</p>
        </div>
        <h1 className='text-white text-3xl font-semibold pb-10'>{props.project.title}</h1>

        <Divider black={false} />
        <section className='px-3 sm:px-10'>
            <div className='pt-10'>
              <Gallery photos={props.project.photos} />
            </div>
            <p className='text-left mt-10'>{props.film.description}</p>
        </section>
      </section>
    </Layout>
  )
}

export default GaleriaPage