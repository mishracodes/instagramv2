import Head from 'next/head'
import { Inter } from 'next/font/google'
import LeftNavbar from '@/components/Navbar/LeftNavbar'
import Dashboard from '@/components/Dashboard/Dashboard'
import Modal from '@/components/Modal/Modal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Instagram v2</title>
        <meta name="description" content="Instagram clone by mishracodes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Left Navbar */}
      <main className='flex'>
        <div className='hidden top-0 left-0 z-40 w-18 border-r h-full px-2 py-2 xl:w-56 md:block md:fixed'>
          <LeftNavbar />
        </div>

        {/* feed */}
        <div className='flex md:ml-20 grow h-screen xl:ml-56'>
          <Dashboard/>
        </div>

        {/* modalbox */}
        {/* <Modal/> */}
      </main>
    </>
  )
}
