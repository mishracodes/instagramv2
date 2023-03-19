import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]";
const screenshots = [
    'https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot4.png',
    'https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot3.png',
    'https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot2.png',
    'https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot1.png'
]
const signin = ({ providers }) => {
    const [screenshotSrc, setscreenshotSrc] = useState('https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot1.png')


    useEffect(() => {
        let counter = 0
        const interval = setInterval(() => {
            setscreenshotSrc(screenshots[counter++])

            if (counter > 3) counter = 0
        }, 2000)

        return () => {
            clearInterval(interval)
        }
    }, [])



    return (
        <>
            <div className='w-[100vw] h-[85vh] pt-8 mt-auto flex justify-center'>
                <div className='hidden md:block mr-4 mb-3 w-[380px] h-[514px] relative'
                    style={{ backgroundImage: `url('https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png')`, backgroundSize: '380px 514px' }}>
                    <motion.div
                        key={screenshotSrc}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 1 }}

                    >
                        <img src={`https://wsrv.nl/?url=${screenshotSrc}`} className='w-[200px] absolute bottom-[60px] right-[50px]' />
                    </motion.div>
                </div>
                <div className='flex items-center  flex-col w-80'>
                    <div className='w-full pt-10 pb-3 px-10 flex flex-col justify-center items-center border border-solid border-[DBDBDB] '>
                        <svg aria-label="Instagram" className="mb-12" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="42" role="img" viewBox="32 4 113 32" width="150">
                            <path clipRule="evenodd" d="M37.82 4.11c-2.32.97-4.86 3.7-5.66 7.13-1.02 4.34 3.21 6.17 3.56 5.57.4-.7-.76-.94-1-3.2-.3-2.9 1.05-6.16 2.75-7.58.32-.27.3.1.3.78l-.06 14.46c0 3.1-.13 4.07-.36 5.04-.23.98-.6 1.64-.33 1.9.32.28 1.68-.4 2.46-1.5a8.13 8.13 0 0 0 1.33-4.58c.07-2.06.06-5.33.07-7.19 0-1.7.03-6.71-.03-9.72-.02-.74-2.07-1.51-3.03-1.1Zm82.13 14.48a9.42 9.42 0 0 1-.88 3.75c-.85 1.72-2.63 2.25-3.39-.22-.4-1.34-.43-3.59-.13-5.47.3-1.9 1.14-3.35 2.53-3.22 1.38.13 2.02 1.9 1.87 5.16ZM96.8 28.57c-.02 2.67-.44 5.01-1.34 5.7-1.29.96-3 .23-2.65-1.72.31-1.72 1.8-3.48 4-5.64l-.01 1.66Zm-.35-10a10.56 10.56 0 0 1-.88 3.77c-.85 1.72-2.64 2.25-3.39-.22-.5-1.69-.38-3.87-.13-5.25.33-1.78 1.12-3.44 2.53-3.44 1.38 0 2.06 1.5 1.87 5.14Zm-13.41-.02a9.54 9.54 0 0 1-.87 3.8c-.88 1.7-2.63 2.24-3.4-.23-.55-1.77-.36-4.2-.13-5.5.34-1.95 1.2-3.32 2.53-3.2 1.38.14 2.04 1.9 1.87 5.13Zm61.45 1.81c-.33 0-.49.35-.61.93-.44 2.02-.9 2.48-1.5 2.48-.66 0-1.26-1-1.42-3-.12-1.58-.1-4.48.06-7.37.03-.59-.14-1.17-1.73-1.75-.68-.25-1.68-.62-2.17.58a29.65 29.65 0 0 0-2.08 7.14c0 .06-.08.07-.1-.06-.07-.87-.26-2.46-.28-5.79 0-.65-.14-1.2-.86-1.65-.47-.3-1.88-.81-2.4-.2-.43.5-.94 1.87-1.47 3.48l-.74 2.2.01-4.88c0-.5-.34-.67-.45-.7a9.54 9.54 0 0 0-1.8-.37c-.48 0-.6.27-.6.67 0 .05-.08 4.65-.08 7.87v.46c-.27 1.48-1.14 3.49-2.09 3.49s-1.4-.84-1.4-4.68c0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81-.01-.5-.87-.75-1.27-.85-.4-.09-.76-.13-1.03-.11-.4.02-.67.27-.67.62v.55a3.71 3.71 0 0 0-1.83-1.49c-1.44-.43-2.94-.05-4.07 1.53a9.31 9.31 0 0 0-1.66 4.73c-.16 1.5-.1 3.01.17 4.3-.33 1.44-.96 2.04-1.64 2.04-.99 0-1.7-1.62-1.62-4.4.06-1.84.42-3.13.82-4.99.17-.8.04-1.2-.31-1.6-.32-.37-1-.56-1.99-.33-.7.16-1.7.34-2.6.47 0 0 .05-.21.1-.6.23-2.03-1.98-1.87-2.69-1.22-.42.39-.7.84-.82 1.67-.17 1.3.9 1.91.9 1.91a22.22 22.22 0 0 1-3.4 7.23v-.7c-.01-3.36.03-6 .05-6.95.02-.94.06-1.63.06-1.8 0-.36-.22-.5-.66-.67-.4-.16-.86-.26-1.34-.3-.6-.05-.97.27-.96.65v.52a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.94-.05-4.07 1.53a10.1 10.1 0 0 0-1.66 4.72c-.15 1.57-.13 2.9.09 4.04-.23 1.13-.89 2.3-1.63 2.3-.95 0-1.5-.83-1.5-4.67 0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81 0-.5-.87-.75-1.27-.85-.42-.1-.79-.13-1.06-.1-.37.02-.63.35-.63.6v.56a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.93-.04-4.07 1.53-.75 1.03-1.35 2.17-1.66 4.7a15.8 15.8 0 0 0-.12 2.04c-.3 1.81-1.61 3.9-2.68 3.9-.63 0-1.23-1.21-1.23-3.8 0-3.45.22-8.36.25-8.83l1.62-.03c.68 0 1.29.01 2.19-.04.45-.02.88-1.64.42-1.84-.21-.09-1.7-.17-2.3-.18-.5-.01-1.88-.11-1.88-.11s.13-3.26.16-3.6c.02-.3-.35-.44-.57-.53a7.77 7.77 0 0 0-1.53-.44c-.76-.15-1.1 0-1.17.64-.1.97-.15 3.82-.15 3.82-.56 0-2.47-.11-3.02-.11-.52 0-1.08 2.22-.36 2.25l3.2.09-.03 6.53v.47c-.53 2.73-2.37 4.2-2.37 4.2.4-1.8-.42-3.15-1.87-4.3-.54-.42-1.6-1.22-2.79-2.1 0 0 .69-.68 1.3-2.04.43-.96.45-2.06-.61-2.3-1.75-.41-3.2.87-3.63 2.25a2.61 2.61 0 0 0 .5 2.66l.15.19c-.4.76-.94 1.78-1.4 2.58-1.27 2.2-2.24 3.95-2.97 3.95-.58 0-.57-1.77-.57-3.43 0-1.43.1-3.58.19-5.8.03-.74-.34-1.16-.96-1.54a4.33 4.33 0 0 0-1.64-.69c-.7 0-2.7.1-4.6 5.57-.23.69-.7 1.94-.7 1.94l.04-6.57c0-.16-.08-.3-.27-.4a4.68 4.68 0 0 0-1.93-.54c-.36 0-.54.17-.54.5l-.07 10.3c0 .78.02 1.69.1 2.09.08.4.2.72.36.91.15.2.33.34.62.4.28.06 1.78.25 1.86-.32.1-.69.1-1.43.89-4.2 1.22-4.31 2.82-6.42 3.58-7.16.13-.14.28-.14.27.07l-.22 5.32c-.2 5.37.78 6.36 2.17 6.36 1.07 0 2.58-1.06 4.2-3.74l2.7-4.5 1.58 1.46c1.28 1.2 1.7 2.36 1.42 3.45-.21.83-1.02 1.7-2.44.86-.42-.25-.6-.44-1.01-.71-.23-.15-.57-.2-.78-.04-.53.4-.84.92-1.01 1.55-.17.61.45.94 1.09 1.22.55.25 1.74.47 2.5.5 2.94.1 5.3-1.42 6.94-5.34.3 3.38 1.55 5.3 3.72 5.3 1.45 0 2.91-1.88 3.55-3.72.18.75.45 1.4.8 1.96 1.68 2.65 4.93 2.07 6.56-.18.5-.69.58-.94.58-.94a3.07 3.07 0 0 0 2.94 2.87c1.1 0 2.23-.52 3.03-2.31.09.2.2.38.3.56 1.68 2.65 4.93 2.07 6.56-.18l.2-.28.05 1.4-1.5 1.37c-2.52 2.3-4.44 4.05-4.58 6.09-.18 2.6 1.93 3.56 3.53 3.69a4.5 4.5 0 0 0 4.04-2.11c.78-1.15 1.3-3.63 1.26-6.08l-.06-3.56a28.55 28.55 0 0 0 5.42-9.44s.93.01 1.92-.05c.32-.02.41.04.35.27-.07.28-1.25 4.84-.17 7.88.74 2.08 2.4 2.75 3.4 2.75 1.15 0 2.26-.87 2.85-2.17l.23.42c1.68 2.65 4.92 2.07 6.56-.18.37-.5.58-.94.58-.94.36 2.2 2.07 2.88 3.05 2.88 1.02 0 2-.42 2.78-2.28.03.82.08 1.49.16 1.7.05.13.34.3.56.37.93.34 1.88.18 2.24.11.24-.05.43-.25.46-.75.07-1.33.03-3.56.43-5.21.67-2.79 1.3-3.87 1.6-4.4.17-.3.36-.35.37-.03.01.64.04 2.52.3 5.05.2 1.86.46 2.96.65 3.3.57 1 1.27 1.05 1.83 1.05.36 0 1.12-.1 1.05-.73-.03-.31.02-2.22.7-4.96.43-1.79 1.15-3.4 1.41-4 .1-.21.15-.04.15 0-.06 1.22-.18 5.25.32 7.46.68 2.98 2.65 3.32 3.34 3.32 1.47 0 2.67-1.12 3.07-4.05.1-.7-.05-1.25-.48-1.25Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                        {/* <form className='w-full flex flex-col'  onSubmit={submitHandler}>
                            <input type='text' name='username' value={userName} onChange={handleNameChange} placeholder='Phone number, username or email address' className='border border-solid border-[DBDBDB] text-xs bg-gray-100 rounded-sm outline-none px-2 py-2 mb-2' />
                            <input type='password' name='password' value={userPassword} onChange={handlePasswordChange} placeholder='Password' className='border border-solid border-[DBDBDB] focus:border-[232323] text-xs bg-gray-100 rounded-sm outline-none px-2 py-2 mb-2' />
                            <input type="submit" className="block select-none cursor-pointer text-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 rounded-md text-sm px-4 py-1 mt-2"  vlaue='Log in'/>
                        </form> */}
                        {/* <div className='flex gap-2 mt-4 relative items-center'>
                            <span className='h-[1px] bg-gray-300 w-24'></span>
                            <span className='relative text-xs '>OR</span>
                            <span className='h-[1px] bg-gray-300 w-24'></span>

                        </div> */}
                        {providers && <>

                            <div className='cursor-pointer text-[12px] font-medium text-blue-600 mt-2  flex items-center' onClick={() => signIn(providers.facebook.id)}><img src='https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/vV4w4OL9xUs.png' className='w-6 h-6 inline-block mr-2' /> Login with Facebook</div>

                            <div onClick={() => signIn(providers.instagram.id)} className='cursor-pointer text-[12px] font-medium text-gray-700 mt-2 flex items-center'> <svg aria-label="Instagram" className="inline-block mr-2" color="rgb(38, 38, 38)" fill="#ED4246" height="16" role="img" viewBox="0 0 24 24" width="16"><title>Instagram</title><path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path></svg>Login with Instagram</div>


                            <div onClick={() => signIn(providers.linkedin.id)} className='cursor-pointer text-[12px] font-medium text-gray-700 mt-2 flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#0A66C2" className="inline-block mr-2" width="16" height="16" focusable="false">
                                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                </svg>
                                Login with Linkedin</div>

                            <div onClick={() => signIn(providers.google.id)} className='cursor-pointer text-[12px] font-medium text-gray-700 mt-2 flex items-center'><img className='w-4 h-4 inline-block mr-2' src='https://ssl.gstatic.com/images/branding/product/2x/googleg_24dp.png' />Login with Google</div>



                            <div onClick={() => signIn(providers.github.id)} className='cursor-pointer text-[12px] font-medium text-gray-700 mt-2 flex items-center'><svg height="16" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="inline-block mr-2">
                                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                            </svg>Login with Github</div>





                        </>}

                        <div className='text-[10px] text-cyan-800 mt-4'>Forgotten your password</div>

                    </div>

                    <div className='text-[13px] w-full py-4 px-2 flex justify-center items-center border border-solid border-[DBDBDB] mt-4'>
                        Don't have an account? <span className='text-blue-600 font-medium ml-1' > Sign up</span>
                    </div>

                    <div className='flex flex-col justify-center items-center mt-4'>
                        <div className='text-[13px] mb-2'>Get the app.</div>
                        <div className='flex gap-1'>
                            <img src='https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png' className='h-10' />
                            <img src='https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png' className='h-10' />

                        </div>
                    </div>

                </div>

            </div>
            <div className='text-[11px] text-gray-400 text-center'>
                <span className='mx-2'>Meta</span>
                <span className='mx-2'>About</span>
                <span className='mx-2'>Blog</span>
                <span className='mx-2'>Jobs</span>
                <span className='mx-2'>Help</span>
                <span className='mx-2'>API</span>
                <span className='mx-2'>Privacy</span>
                <span className='mx-2'>Terms</span>
                <span className='mx-2'>Top accounts</span>
                <span className='mx-2'>Locations</span>
                <span className='mx-2'>Instagram spante</span>
                <span className='mx-2'>Contact uploading and non-users</span>
                <span className='mx-2'>Meta Verified</span>
            </div>
            <div className='text-xs text-gray-400 text-center mt-5'>
                <span className='mx-3'>English (UK)</span>
                <span className='mx-3'>© 2023 Instagram from Meta</span>
            </div>
        </>
    )
}

export default signin


export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions);
    if (session) {
        return { redirect: { destination: "/" } };
    }

    const providers = await getProviders();
    return {
        props: {
            providers: providers ?? [],
        },
    }
}