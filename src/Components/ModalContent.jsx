/* eslint-disable react/prop-types */




export default function ModalContent({painting, closeModal}) {
  return (
    <div onClick={closeModal}
    className="font-primary fixed left-0 top-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
        <div onClick={e => e.stopPropagation()} className="w-[300px] sm:w-[450px]  relative">
            <button onClick={closeModal} className="absolute -top-10 right-0 text-white uppercase hover:opacity-75 ">
                Close
            </button>
            <img src={"." + painting.images.hero.large} alt={painting.title} 
                className="w-full h-full"
            />
        </div>
    </div>
  )
}
