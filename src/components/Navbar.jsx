import { useState } from 'react'
import {HiMenuAlt3} from 'react-icons/hi'

export const Navbar = () => {
    const [nav, setNave] = useState(false)
    const handleNav = () => {
      setNave(!nav)
    }




  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
        <h1 className='text-white font-bold text-2xl z-20'>Experiences</h1>
        < HiMenuAlt3 size={25} className='text-white z-20 cursor-pointer' onClick={handleNav}/>
        <div className={
            nav 
            ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10 overflow-scroll' 
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10 overflow-hidden'}>
            <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
                <li className='font-bold text-3xl p-8'>Home</li>
                <li className='font-bold text-3xl p-8'>Destinations</li>
                <li className='font-bold text-3xl p-8'>Reservations</li>
                <li className='font-bold text-3xl p-8'>Amenities</li>
                <li className='font-bold text-3xl p-8'>Rooms</li>
            </ul>
        </div>
    </div>
  )
}
