

export const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/18949434/pexels-photo-18949434/free-photo-of-ciudad-barca-tarde-canal.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/"/>
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/3879160/pexels-photo-3879160.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/"/>
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/2346216/pexels-photo-2346216.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/"/>
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/2028885/pexels-photo-2028885.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/"/>
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/"/>
        </div>
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
            <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptatibus.</p>
            <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda minima excepturi, nostrum reprehenderit inventore optio cupiditate similique maxime accusantium omnis magnam, totam voluptas, ab amet! Quaerat laboriosam dolore porro.</p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl border py-2 px-3 rounded-full'>Learn More</button>
                <button className='border py-2 px-3 rounded-full bg-black text-white hover:shadow-xl'>Book Your Trip</button>
            </div>
        </div>
    </div>
  )
}
