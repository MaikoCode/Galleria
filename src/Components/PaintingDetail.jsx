import { useParams, useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';
import paintingData from "../assets/data.json"
import Footer from './Footer';
import Overview from "./Overview"
import { useContext } from 'react';
import { ExpositionContext } from '../context/ExpositionContext';




function PaintingDetails() {
    const { paintingName } = useParams();
    const navigate = useNavigate();
    const painting = paintingData.find(p => p.name === paintingName);

    useEffect(() => {
        if (!painting) {
            navigate('/404');
        }
    }, [painting, navigate]);

    if (!painting) {
        return null;
    }

    const { currentIndex, tableaux } = useContext(ExpositionContext);
    const progress = (currentIndex / (tableaux.length - 1)) * 100;

    return (
        <>
        
        <div className='m-4 mb-8'>
            <div className='flex flex-col laptop:flex-row justify-between'>
                <div className='relative h-1/2  laptop:w-1/2 laptop:h-auto mb-[10vh] sm:mb-[5vh] mt-10 '>
                    <img src={ "/Galleria" + painting.images.hero.large} alt={painting.title} 
                        className='h-[300px] w-full sm:h-[500px] sm:w-2/3 laptop:w-3/4  '
                    />

                    <div className='
                    absolute w-72 bg-white flex flex-col 
                    -bottom-10 left-0 p-4 pl-5 pr-7
                    sm:bottom-auto sm:left-auto sm:-top-5 sm:right-36 sm:h-56 sm:pl-8 font-primary
                     laptop:right-1 laptop:left-auto self-end
                    '>
                        <span className='font-bold text-xl sm:text-5xl laptop:text-4xl ' >{painting.name}</span>
                        <span className=' text-gray sm:pt-4'>{painting.artist.name}</span>
                    </div>
                    <Overview painting={painting} extraClasses="absolute top-4 left-4
                    sm:top-auto sm:left-auto sm:bottom-4 sm:left-4 laptop:ml-4"/>
                    <img src={ "/Galleria" + painting.artist.image} alt={painting.artist.name}
                     className='absolute -bottom-24 left-4 w-16   h-16
                     sm:bottom-auto sm:left-auto sm:top-52 sm:right-16 laptop:-right-5 laptop:top-auto laptop:-bottom-8  sm:w-32 sm:h-32' />
                </div>

                <div className='relative h-1/2 laptop:w-1/2 laptop:h-auto  laptop:pl-20'>

                    <span className='absolute right-1 top-5  text-8xl font-thin font-primary text-black-gray -z-10
                    sm:text-[200px] sm:right-auto sm:top-auto sm:left-1 laptop:left-auto laptop:right-5'>
                        {painting.year}
                    </span>
                    
                    <p className='pt-20  text-gray font-semibold leading-relaxed sm:m-10 sm:font-xl
                    sm:text-justify laptop:mx-auto laptop:text-left laptop:font-sm'>
                    {painting.description}
                    </p>

                    <div className='uppercase underline text-gray tracking-wider text-xs mt-5 mb-10 sm:mx-10
                    laptop:mx-auto'>
                        <a href={painting.source}>go to source</a>
                    </div>  
                </div>
            </div>
        </div>
        <div className="progress-container">
                <div className="progress-bar" style={{width: `${progress}%`}}></div>
            </div>
           <Footer name={painting.name}  artist={painting.artist.name}/>
           </>

        
    );
}

export default PaintingDetails;
