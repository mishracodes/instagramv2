import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const Dropdown = (props) => {
  const {signOut,session,signIn,posStart}=props
  return (
    <Menu as="div" className="relative  text-left">
    <div>
      <Menu.Button className='w-full flex items-center justify-center xl:justify-start p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
      {props.children}

      </Menu.Button>

    </div>

    <Transition
      as={Fragment}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Menu.Items className={`absolute ${posStart}-0 bottom-10 z-10 mt-2 w-56 origin-bottom-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'flex px-4 py-1 text-sm'
                )}
              >
                <span className='flex-1'>Settings</span>
                <svg aria-label="Settings" className="_ab6-" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="20" role="img" viewBox="0 0 24 24" width="20"><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </a>
            )}
          </Menu.Item>
          
        </div>
        <div className='py-1'>
        <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'flex px-4 py-1 text-sm'
                )}
              >
                <span className='flex-1'>Your activity</span>
                <svg aria-label="Your Activity" className="_ab6-" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="20" role="img" viewBox="0 0 24 24" width="20"><path d="M12 1.505a10.5 10.5 0 11-7.424 17.924" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><polyline fill="none" points="8.893 15.108 12 12 12.012 12.012 12.012 5.793" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline><circle cx="7.24" cy="2.651" r="1.125"></circle><circle cx="3.515" cy="5.83" r="1.125"></circle><circle cx="1.636" cy="10.353" r="1.125"></circle><circle cx="2.01" cy="15.235" r="1.125"></circle></svg>
                
              </a>
            )}
          </Menu.Item>
        </div>
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'flex px-4 py-1 text-sm'
                )}
              >
                <span className='flex-1'>Saved</span>
                <svg aria-label="Saved" className="_ab6-" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="20" role="img" viewBox="0 0 24 24" width="20"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                
              </a>
            )}
          </Menu.Item>
          </div>
          <div className='py-1'>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'flex px-4 py-1 text-sm'
                )}
              >
                <span className='flex-1'>Switch appreance</span>
                <svg aria-label="Theme icon" className="_ab6-" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="20" role="img" viewBox="0 0 16 16" width="20"><path d="M8.05 16C3.61 16 0 12.39 0 7.95 0 3.99 2.83.65 6.72 0c.49-.03.87.22.99.6.11.38-.05.78-.41 1-1.7.93-2.75 2.69-2.75 4.61 0 2.89 2.35 5.25 5.25 5.25a5.25 5.25 0 0 0 4.61-2.74c.19-.37.61-.54 1.01-.4.42.14.66.56.58 1.01A8.044 8.044 0 0 1 8.05 16zM5.8 1.32c-2.78.93-4.73 3.56-4.73 6.63 0 3.85 3.13 6.99 6.99 6.99 3.04 0 5.66-1.93 6.61-4.72a6.301 6.301 0 0 1-4.87 2.31c-3.48 0-6.31-2.83-6.31-6.31-.01-1.93.86-3.71 2.31-4.9zm9.54 7.89s0 .01 0 0c0 .01 0 0 0 0z" fill="currentColor"></path></svg>
                
              </a>
            )}
          </Menu.Item>
        </div>
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'flex px-4 py-1 text-sm'
                )}
              >
                <span className='flex-1'>Report a problem </span>
                <svg aria-label="Report a problem" className="_ab6-" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="20" role="img" viewBox="0 0 24 24" width="20"><path d="M18.001 1h-12a5.006 5.006 0 0 0-5 5v9.005a5.006 5.006 0 0 0 5 5h2.514l2.789 2.712a1 1 0 0 0 1.394 0l2.787-2.712h2.516a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5Zm3 14.005a3.003 3.003 0 0 1-3 3h-2.936a1 1 0 0 0-.79.387l-2.274 2.212-2.276-2.212a1 1 0 0 0-.79-.387H6a3.003 3.003 0 0 1-3-3V6a3.003 3.003 0 0 1 3-3h12a3.003 3.003 0 0 1 3 3Zm-9-1.66a1.229 1.229 0 1 0 1.228 1.228A1.23 1.23 0 0 0 12 13.344Zm0-8.117a1.274 1.274 0 0 0-.933.396 1.108 1.108 0 0 0-.3.838l.347 4.861a.892.892 0 0 0 1.77 0l.348-4.86a1.106 1.106 0 0 0-.3-.838A1.272 1.272 0 0 0 12 5.228Z"></path></svg>
                
              </a>
            )}
          </Menu.Item>
          </div>
          <div className='py-1'>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'flex px-4 py-1 text-sm'
                )}
              >
                <span className='flex-1'>Switch accounts </span>

                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
</svg>

              </a>
            )}
          </Menu.Item>
        </div>
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <div>
              {session?<div onClick={signOut}
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'flex px-4 py-1 text-sm'
                )}
              >
                <span className='flex-1'>Log out</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
</svg>

                
              </div>: 
              
              <div onClick={signIn}
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'flex px-4 py-1 text-sm'
                )}
              >
                <span className='flex-1'>Log in</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
</svg>

                
              </div>

              }
              </div>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
  )
}

export default Dropdown