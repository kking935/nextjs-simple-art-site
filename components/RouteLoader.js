import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { LoadIcon } from './Icons'

const RouteLoader = ({ children }) => {
  const [mainClassToggler, setMainClassToggler] = useState('blur-none')
  const [loaderClassToggler, setLoaderClassToggler] = useState('hidden opacity-0')
  const router = useRouter()

  useEffect(() => {
    const handleRouteStart = () => {
      setMainClassToggler('transition duration-500 ease-out filter blur-lg')
      setLoaderClassToggler('transition duration-500 ease-in opacity-100')
    }

    const handleRouteComplete = () => {
      setTimeout(() => {
        setMainClassToggler('transition duration-200 ease-in filter blur-none')
        setLoaderClassToggler('transition duration-500 ease-out opacity-0')
        setTimeout(() => { setLoaderClassToggler('hidden') }, 500);
      }, 1000)
    }

    const handleRouteChangeError = () => {
      setMainClassToggler('transition duration-500 ease-out filter blur-none')
      setLoaderClassToggler('hidden')
    }

    router.events.on('routeChangeStart', handleRouteStart)
    router.events.on('routeChangeComplete', handleRouteComplete)
    router.events.on('routeChangeError', handleRouteChangeError)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteStart)
      router.events.off('routeChangeComplete', handleRouteComplete)
      router.events.off('routeChangeError', handleRouteChangeError)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <>
      <div className={`z-30 ${loaderClassToggler} w-screen h-screen text-blue-500 absolute b-0 l-0 flex flex-col items-center justify-center baseBackgroundColor`}>
        <LoadIcon />
        <p className='cursor-default mt-5 text-xl font-bold'>CARGANDO</p>
      </div>
      <div className={`z-20 ${mainClassToggler}`}>
        {children}
      </div>
    </>
  )
}

export default RouteLoader