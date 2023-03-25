import React, { useState } from 'react'
import { useSession} from "next-auth/react"
import db,{storage} from '../../firebase'
import { addDoc, collection, getDoc, setDoc } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useDispatch } from 'react-redux';
import { toogleCreateModal } from '@/store/slices/modalReducer';
const CreateModal = () => {
  const { data: session } = useSession()

  const [AvatarSrc, setAvatarSrc] = useState("")
  const [ImageUpload, setImageUpload] = useState(null)
  const [postFinal, setpostFinal] = useState(null)
  const [caption, setcaption] = useState('')
  const imagePicker = (event) => {
    setAvatarSrc(URL.createObjectURL(event.target.files[0]));
    setImageUpload(event.target.files[0]);
    setpostFinal(true)
  }
  const dispatch=useDispatch()
  const sharePost=()=>{
    if (ImageUpload == null) return;

  
       
        const imageRef = ref(storage, `posts/${session.user.email}/${ImageUpload.name + uuidv4()}`);
        console.log('imageRef',imageRef);
        
        uploadBytes(imageRef, ImageUpload).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {

            addDoc(collection(db,'posts'), {
              name:session.user.name,
              profileUrl:session.user.image,
              email:session.user.email,
              imageUrl:url, 
              timestamp: new Date(),
              caption
            });
           
           
          });
        });
        setcaption('')
        dispatch(toogleCreateModal())
  }
  
  return (
    <>
      {!postFinal&&<div className='flex flex-col justify-center items-center'>
        <h2 className='mb-6 font-semibold border-b border-solid border-stone-200 w-full text-center py-3'>Create new post</h2>
        <div className='p-10 sm:py-28  flex flex-col justify-center items-center'>
          <svg aria-label="Icon to represent media such as images or videos" className="mb-6" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="77" role="img" viewBox="0 0 97.6 77.3" width="96"><title>Icon to represent media such as images or videos</title><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path></svg>

          <p className='mb-4'>Select photos and videos you want to post</p>
          <input style={{ display: 'none' }} onChange={imagePicker} type='file' id='postImageUpload' />
          <label htmlFor='postImageUpload' className="select-none cursor-pointer text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 rounded-md text-sm px-4 py-1 mr-2 mb-2 ">Select from Device</label>
        </div>
      </div>}
      {postFinal&&<div className='flex flex-col justify-center items-center'>
        <div className='flex justify-between px-4 border-stone-200 w-full  border-b border-solid py-3'>
          <svg onClick={()=>setpostFinal(false)} aria-label="Back" className="cursor-pointer" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Back</title><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2.909" x2="22.001" y1="12.004" y2="12.004"></line><polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline></svg>
        <span className=' font-semibold'>Create new post</span>
        <span className=' font-semibold text-blue-500 cursor-pointer' onClick={sharePost}>Share</span>
          
        </div>
        <div className='flex flex-col w-full sm:flex-row'>
          <img src={AvatarSrc} className='w-[400px] h-[400px] object-contain'/>
          
          <div className='px-4 py-4  flex-grow'>
            <div className='flex'>
              <img src={session.user.image} className='w-6 h-6 rounded-full mr-4'/>
              <p className='text-sm font-medium'>{session.user.name.toLowerCase().split(' ').join('')}</p>
            </div>
            <textarea value={caption} onChange={(event)=>setcaption(event.target.value)} className='outline-none border border-solid p-1 border-stone-100 mt-2 w-full h-full' placeholder='Write a caption...'>
              
            </textarea>

          </div>
          
        </div>
      </div>}
    </>
  )
}

export default CreateModal