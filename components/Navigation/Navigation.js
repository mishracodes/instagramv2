import React from 'react'
import Footer from '../Navbar/Footer'
import Header from '../Navbar/Header'
import { useSession, signIn } from "next-auth/react"
import LeftNavbar from '../Navbar/LeftNavbar'

const Navigation = (props) => {
    const { data: session } = useSession()

    {/* <div className='stories pb-4 px-2 py-2 overflow-auto whitespace-nowrap '>
                        {data?.results?.map(e => <div key={e.login.uuid} className='mr-4 inline-block  cursor-pointer'>
                            <img src={e.picture.medium} className='h-12 w-12 rounded-full ring-2 ring-pink-600' alt="" />
                            <p className='text-xs select-none pt-2 text-center'>{e.name.first}</p>
                        </div>)}

                        
                    </div> */}
    return (

        <>

            {session && <main className='flex'>
                <div className='hidden top-0 left-0 z-40 w-18 border-r h-full px-2 py-2 xl:w-56 md:block md:fixed'>
                    <LeftNavbar />
                </div>

                <div className='flex md:ml-20 grow h-screen xl:ml-56'>
                    <div className='w-full  h-full flex justify-center '>


                        <div className='max-w-xl flex justify-center lg:max-w-4xl'>
                            <Header session={session} signIn={signIn} />

                            {props.children}

                        </div>
                        {session && <Footer session={session} />}

                    </div>
                </div>

            </main>}


        </>


    )
}

export default Navigation
