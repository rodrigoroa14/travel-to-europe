

export const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img 
       className='top-0 left-0 w-full h-screen object-cover' src='https://images.pexels.com/photos/3254754/pexels-photo-3254754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'/>
        <div className='absolute top-0 w-full h-screen flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                <p>All inclusive</p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Exclusives tours for all around Europe</h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Odit eos quae explicabo ab nemo corrupti aut dignissimos atque, blanditiis placeat.
                </p>
                <button className='bg-white text-black border py-2 px-3 rounded-full'>Reserve now</button>
            </div>
        </div>
    </div>
  )
}
