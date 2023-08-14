import { useContext } from 'react';
import { ExpositionContext } from '../context/ExpositionContext';


export default function Header() {
  
  const { isExposing, setIsExposing, setManualExposingPath, setCurrentIndex } = useContext(ExpositionContext);

  return (
      <header className='border-b-2 border-zinc-300 pb-4'>
        <div className="flex justify-between max-w-6xl lg:mx-auto m-4">
          <span className='font-primary font-extrabold text-black text-3xl sm:text-5xl cursor-pointer'>galleria.</span>
          <button onClick={() => {setIsExposing(!isExposing); setCurrentIndex(0);}}  className="border-none text-gray text-sm tracking-wider hover:text-black font-xs sm:font-base">
            {isExposing ? 'STOP SLIDESHOW' : 'START SLIDESHOW'}
          </button>
        </div>
      </header>
  )
}
