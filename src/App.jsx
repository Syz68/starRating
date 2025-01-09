import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

function App() {

  const noOfStars = 7

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  function handleClick(currentIndex){
    setRating(currentIndex)
  }

  function handleMouseEnter(currentIndex){
    setHover(currentIndex)
  }

  function handleMouseLeave(){
    setHover(0)
  } 


  return (
    <div className="container p-4 bg-slate-800 h-screen flex justify-center items-center w-full ">

      <div className='flex flex-col items-center gap-4'>

        <h1 className="text-4xl text-white font-bold shadow-md hover:underline hover:cursor-pointer "
        >Star Rating</h1>

        <div className='flex m-4'>

          {[...Array(noOfStars)].map((star, i) => {
            i += 1;

            return (
              
              <FaStar
                key={i}
                className={`text-4xl ${i <= (hover || rating) ? "text-yellow-500" : "text-yellow-100"} `}
                onClick={() => handleClick(i)}
                onMouseMove={() => handleMouseEnter(i)}
                onMouseLeave={() => handleMouseLeave()}
                size={40}

              />
            )

          })}

        </div>

      </div>
    </div>
  )
}

export default App
