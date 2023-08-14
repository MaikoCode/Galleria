import ButtonNext from '../assets/img/shared/icon-next-button.svg'
import ButtonPrev from '../assets/img/shared/icon-back-button.svg'
import { useContext } from 'react'
import { ExpositionContext } from '../context/ExpositionContext'
import { useEffect } from 'react'


export default function Buttons({name}) {
  const {moveForward, moveBack, setCurrentIndex, tableaux} = useContext(ExpositionContext);
  const tableauName = name;

  useEffect(() => {
      const tableauIndex = tableaux.findIndex(tb => tb.name === tableauName);
      console.log("Index Trouvé:", tableauIndex); // Ceci va afficher l'index trouvé.

      if(tableauIndex !== -1) {
          setCurrentIndex(tableauIndex);
      }
  }, [tableauName]);

  return (
      <span className='flex justify-between min-w-[75px] max-w-[75px] sm:min-w-[100px] sm:max-w-[100px] '>
          <button onClick={() => { console.log("moveBack appelé"); moveBack(); }}>
              <img className='h-4 sm:h-6' src={ButtonPrev} alt="button icon" />
          </button>
          <button onClick={() => { console.log("moveForward appelé"); moveForward(); }}>
              <img className='h-4 sm:h-6' src={ButtonNext} alt="button icon" />
          </button>
      </span>
  );
}
