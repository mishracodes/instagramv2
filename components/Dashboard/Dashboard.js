import React, { useEffect, useState } from 'react'
import { useSession, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import db from '../../firebase'


const Dashboard = (props) => {
    const { data: session } = useSession()
    const [data, setData] = useState(null)
    const [meme, setMeme] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setLoading(true)
        fetch('https://randomuser.me/api/?results=34')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
        // fetch('https://api.imgflip.com/get_memes')
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setMeme(data)
        //     })
    }, [])

    useEffect(() => {
        const postsCollectionRef = collection(
          db,
          "posts"
        );
        const unsub = onSnapshot(
          query(postsCollectionRef, orderBy("timestamp", "desc")),
          (response) => {
            setMeme(
              response.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            );
          }
        );
        return () => {
          unsub();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);



    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    {/* <div className='stories pb-4 px-2 py-2 overflow-auto whitespace-nowrap '>
                        {data?.results?.map(e => <div key={e.login.uuid} className='mr-4 inline-block  cursor-pointer'>
                            <img src={e.picture.medium} className='h-12 w-12 rounded-full ring-2 ring-pink-600' alt="" />
                            <p className='text-xs select-none pt-2 text-center'>{e.name.first}</p>
                        </div>)}

                        
                    </div> */}
    return (
        <>
            {/* storyfeed */}
            <div className='w-full lg:mx-auto lg:w-3/5'>

                {/* stories */}
                <div className='pt-1 mt-16 md:mt-10 storiesWidth sm:w-full stories pb-4 px-2 py-2 overflow-auto whitespace-nowrap '>
                    {data?.results?.map(e => <div key={e.login.uuid} className='mr-4 inline-block  cursor-pointer'>
                        <img src={e.picture.medium} className='h-12 w-12 rounded-full ring-2 ring-pink-600' alt="" />
                        <p className='text-xs select-none pt-2 text-center'>{e.name.first}</p>
                    </div>)}
                </div>
                
                <div className='pt-2'>
                    {meme&&meme.map(e => <article key={e.id} className='w-4/5 mx-auto py-3 border-b'>
                        {/* header */}
                        <div className='flex justify-between px-2 py-2 drop-shadow-sm'>
                            <div className='flex gap-1 items-center'>
                                <img src={e.data.profileUrl} className='inline-block h-8 w-8 mr-2 rounded-full ring-2 ring-pink-600' alt="" />
                                <div>
                                    <div className='flex gap-1'>
                                        <p className='text-xs font-medium'>{e.data.name}</p>
                                        <p className='text-xs text-gray-500'>•</p>
                                        <p className='text-xs text-gray-500'>{new Date(e.data.timestamp.toDate()).toLocaleString("en-IN", {timeZone: 'Asia/Kolkata', hour12:true,hour:'numeric',minute:'numeric',year: 'numeric',month: 'short',day: 'numeric'})}</p>
                                    </div>
                                    <p className='text-xs'>Original audio</p>
                                  
                                </div>

                            </div>

                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>

                            </div>
                        </div>
                        <div className='bg-black w-full flex justify-center'>
                            <img src={e.data.imageUrl} className='sm:w-full' />

                        </div>

                        <div className='flex justify-between py-2'>
                            <div className='flex gap-1'>
                                <div className='p-2 cursor-pointer'>
                                    <svg aria-label="Like" className="x1lliihq x1n2onr6" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                                </div>


                                <div className='p-2 cursor-pointer'><svg aria-label="Comment" className="x1lliihq x1n2onr6" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg></div>


                                <div className='p-2 cursor-pointer'><svg aria-label="Share Post" className="x1lliihq x1n2onr6" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg></div>
                            </div>
                            <div className='p-2 cursor-pointer'><svg aria-label="Save" className="x1lliihq x1n2onr6" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg></div>
                        </div>

                        <p className='text-sm'>Liked by pandey_premchandra and 127,077 others </p>
                        <p className='text-xs'><b>{e.data.name.toLowerCase().split(' ').join('')}</b> {e.data.caption}</p>
                        <p className='text-xs text-gray-500'>View all 915 comments</p>
                        <input className='outline-none border-spacing-0 text-xs' placeholder='Add a comment' />






                    </article>)}

                    
                </div>

            </div>

            {/* rightsidebar */}
            <div className='hidden w-2/5 ml-16 pt-8 lg:block'>
                <div className='flex justify-between px-2 py-2'>
                    {session && <div className='flex gap-1 items-center cursor-pointer' onClick={() => router.push('/profile')}>
                        <img src={session.user.image} className='inline-block h-12 w-12 rounded-full ring-2 ring-pink-600' alt="" />
                        <div className='ml-3'>
                            <div className='flex gap-1'>
                                <p className='text-xs font-medium'>{session.user.name.toLowerCase().split(' ').join('')}</p>
                            </div>
                            <p className='text-xs text-gray-500'>{session.user.name}</p>

                        </div>

                    </div>}


                    <div className='text-xs font-medium cursor-pointer' onClick={signOut}>
                        Logout

                    </div>
                </div>
                <div className='my-4 flex justify-between'>
                    <p className='text-xs text-gray-500 font-medium'>Suggestions for you</p>
                    <p className='text-xs text-gray-800 font-medium'>See all</p>
                </div>

                <div className='py-3 px-2'>


                    {data?.results?.slice(0, 6).map(e => <div key={e.login.uuid} className='flex justify-between mt-3'>
                        <div className='flex gap-1 items-center'>
                            <img src={e.picture.medium} className='inline-block h-8 w-8 rounded-full ring-2 ring-pink-600' alt="" />
                            <div className='ml-2'>
                                <div className='flex gap-1'>
                                    <p className='text-xs font-medium'>{e.login.username}</p>
                                </div>
                                <p className='text-xs text-gray-500'>Suggested for you</p>

                            </div>

                        </div>


                        <div className='text-xs text-blue-500 font-semibold'>
                            Follow
                        </div>
                    </div>)}



                </div>
            </div>
        </>
    )
}

export default Dashboard
