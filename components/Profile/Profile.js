import React from 'react'
import { useSession } from "next-auth/react"

const Profile = () => {
  const { data: session } = useSession()

  return (
      <main className='max-w-4xl  mx-auto px-6 pt-8  mt-16 md:mt-2 '>
        <div className='flex mb-8'>
          <div className='w-1/3 flex justify-center'>
            <img src='https://media.licdn.com/dms/image/C4E03AQE01sctdzZb2A/profile-displayphoto-shrink_400_400/0/1623473624103?e=1684972800&v=beta&t=Mu7XeaMAKBsvfaO-UU5C_zol9QmKzRGAxkd2fOY1Qp4' className='w-[150px] h-[150px] rounded-full' />
          </div>
          <div className='flex-grow text-[#262626]'>
            <div>
              <span className='text-xl mr-6'>mishra.codes</span>
              <span className='px-3 py-1 text-[13px] bg-gray-300 font-medium rounded-md mr-3'>Follow</span>
              <span className='px-3 py-1 text-[13px] bg-gray-300 font-medium rounded-md mr-3'>Message</span>
            </div>
            <div className='text-base mt-6 flex gap-6'>
              <span><b>0</b> posts</span>
              <span><b>898</b> followers</span>
              <span><b>1,258</b> following</span>
            </div>
            <div className='text-sm  mt-6'>
              <div className='font-medium'>Amit Kumar Mishra</div>
              <div className='text-gray-400'>Digital Creator</div>
              <div className='text-gray-600'>rebooting...</div>
              <div className='font-medium text-blue-800'>mishracodes.github.io</div>
            </div>
          </div>
        </div>
        <div className='h-[1px] w-full bg-gray-300'></div>
        <div className='w-full flex justify-center'>
          <div className='flex text-xs font-medium text-[#8e8e8e] gap-10 '>
            <div className='flex gap-1 items-center border-t border-solid border-gray-600 py-4'><svg aria-label="" className="_ab6-" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="12" role="img" viewBox="0 0 24 24" width="12"><rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
              POSTS</div>

              <div className='flex gap-1 items-center py-4'>
                <svg aria-label="" className="_ab6-" color="rgb(142, 142, 142)" fill="rgb(142, 142, 142)" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
              REELS</div>

              <div className='flex gap-1 items-center py-4'>
                <svg aria-label="" className="_ab6-" color="rgb(142, 142, 142)" fill="rgb(142, 142, 142)" height="12" role="img" viewBox="0 0 24 24" width="12"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line><path d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z" fillRule="evenodd"></path></svg>
              TAGGED</div>
          </div>
        </div>
        <div className='h-60'>
          <div className='mt-14 mx-11'>
            <div className='border-2 border-solid border-black h-16 w-16 rounded-full flex items-center justify-center mx-auto'>
              <img src='https://www.pinpng.com/pngs/m/678-6780577_instagram-camera-icon-png-image-free-download-searchpng.png' className='w-7 h-7'/>
            </div>
            <div className='text-[30px] text-[#262626] flex items-center justify-center font-extrabold'>
            {session?'Share photos':'No posts yet'}
            </div>
           { session && <p className='flex justify-center text-sm'>When you share photos, they will appear on your profile.</p>}

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
            <div className='text-xs text-gray-400 text-center mt-5 pb-16 md:pb-1'>
                <span className='mx-3'>English (UK)</span>
                <span className='mx-3'>© 2023 Instagram from Meta</span>
            </div>
      </main>
  )
}

export default Profile