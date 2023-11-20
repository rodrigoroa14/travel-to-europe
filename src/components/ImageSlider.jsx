import { useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const ImageSlider = () => {

const pictures = [
        {
          url: "https://images.pexels.com/photos/16803393/pexels-photo-16803393/free-photo-of-comida-pizza-restaurante-cena.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Pizza"
        },
        {
          url: "https://images.pexels.com/photos/15564188/pexels-photo-15564188/free-photo-of-comida-desayuno-miel-de-maple-tortitas.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Pancackes"
        },
        {
          url: "https://images.pexels.com/photos/17593640/pexels-photo-17593640/free-photo-of-comida-restaurante-cuchara-bebidas.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Ramen"
        },
        {
          url: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Hamburger"
        }
       ]

const [currentIndex, setCurrentIndex] = useState(0)

const sumIndexCurrent = () => {
    const lastCurrent = currentIndex
    const nextIndex = lastCurrent == 3 ? 0 : lastCurrent + 1
    setCurrentIndex(nextIndex)
}

const sustractIndexCurrent = () => {
    const current = currentIndex
    const prevIndex = current ? current - 1 : pictures.length -1
    setCurrentIndex(prevIndex)
}

const goToPicture = (indexPicture) => {
  setCurrentIndex(indexPicture)
}

  return (
    <div className="max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group">
        <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
             style={{backgroundImage: `url(${pictures[currentIndex].url})`}}>
        </div>
        <div className='absolute top-[50%] -trasnlate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2
        group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft size={30} onClick={sustractIndexCurrent}/>
        </div>
        <div className='absolute top-[50%] -trasnlate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2
        group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight size={30} onClick={sumIndexCurrent}/>
        </div>

        <div className='flex top-4 justify-center py-2'>
          {pictures.map((pic, indexPic) => (
            <div className='text-2xl cursor-pointer' key={indexPic} onClick={() => {goToPicture(indexPic)}}>
              <RxDotFilled />
            </div>
          ))}
        </div>
            
    </div>
  )
}

export default ImageSlider