import IconView from './assets/img/shared/icon-view-image.svg';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import ModalContent from './ModalContent';
import { useEffect } from "react"

// eslint-disable-next-line react/prop-types
export default function Overview({ extraClasses, painting }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if(showModal){
      document.body.classList.add('overflow-hidden')
    }else{
      document.body.classList.remove('overflow-hidden')
    }
  }, [showModal])

  return (
    <>
      <button 
        className={`flex justify-between p-3 px-4 border-none bg-black bg-opacity-75 hover:bg-gray ${extraClasses}`} 
        onClick={() => setShowModal(!showModal)}
      >
        <img src={IconView} alt="icon view" className='self-center'/>
        <span className='text-white pl-2 self-center text-sm'>VIEW IMAGE</span>
      </button>
      {showModal && createPortal(<ModalContent painting={painting} closeModal={() => setShowModal(!showModal)}/>, document.body)}
    </>
  );
}
