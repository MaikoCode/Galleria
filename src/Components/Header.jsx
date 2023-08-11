import { useNavigate  } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
      <header onClick={ () => navigate("/")} className='border-b-2 border-zinc-300 pb-4'>
        <div className="flex justify-between max-w-6xl lg:mx-auto m-4">
          <span className='font-primary font-extrabold text-black text-3xl sm:text-5xl cursor-pointer'>galleria.</span>
          <button className="border-none text-gray text-sm tracking-wider hover:text-black font-xs sm:font-base">START SLIDESHOW</button>
        </div>
      </header>
  )
}
