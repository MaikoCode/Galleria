import ButtonNext from '../assets/img/shared/icon-next-button.svg'
import ButtonPrev from '../assets/img/shared/icon-back-button.svg'


export default function Buttons() {
  return (
   <span className='flex justify-between min-w-[75px] max-w-[75px]
    sm:min-w-[100px] sm:max-w-[100px] '>
        <button><img className='h-4 sm:h-6' src={ButtonPrev} alt="button icon" /></button>
        <button><img className='h-4 sm:h-6' src={ButtonNext} alt="button icon" /></button>
   </span>
  )
}
