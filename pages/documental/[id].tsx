import type { NextPage } from 'next'
import Layout from '../../components/Layout'
import Link from 'next/link'
import Divider from '../../components/Divider'
import films from '../../data/film.json'

export async function getStaticPaths() {
  let paths = []
  for (let i = 0; i < films.length; i++) {
    paths.push({params: { id: films[i].endpoint }})
  }

  return { paths, fallback: false }
}

export async function getStaticProps(props: {params: {id: string}}) {
  let film: any = ''
  for (let i = 0; i < films.length; i++) {
    if (films[i].endpoint === props.params.id) {
      film = films[i]
      break
    }
  }

  return { props: { film } }
}

type FilmProps = {
  film: {
    title: string,
    embeddedSrc: any,
    description: string
  }
}

const DocumentalPage: NextPage<FilmProps> = (props: FilmProps) => {
  return (
    <Layout>
      <section className='text-center mx-auto max-w-7xl pt-10 pb-24 px-8 md:px-16'>
        <div className='pb-10 text-left text-gray-400'>
          <Link href='/escaparate'>
            <a className=' hover:text-blue-400 text-current'>Escaparate</a>
          </Link>
          <p className='inline-block mx-1'> / </p>
          <p className='cursor-default inline-block font-semibold'>{props.film.title}</p>
        </div>
        <h1 className='text-white text-3xl font-semibold pb-10'>{props.film.title}</h1>

        <Divider black={false} />
        <section className='px-3 sm:px-10'>
            <div className='pt-10 flex justify-center items-center'>
                <iframe width='760' height='515' 
                    src={props.film.embeddedSrc}
                    title='YouTube video player' 
                    frameBorder='0' 
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
                    allowFullScreen>
                </iframe>
            </div>
            <p className='text-left mt-10'>{props.film.description}</p>
        </section>
      </section>
    </Layout>
  )
}

export default DocumentalPage