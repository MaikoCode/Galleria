
import IconView from '../assets/img/shared/icon-view-image.svg'

// eslint-disable-next-line react/prop-types
export default function Overview({ extraClasses }) {
  return (
    <>
        <button className={`flex justify-between p-3 px-4 border-none bg-black bg-opacity-75 hover:bg-gray ${extraClasses}`}>
            <img src={IconView} alt="icon view" className='self-center'/>
            <span className='text-white pl-2 self-center text-sm'>VIEW IMAGE</span>
        </button>
    </>
  )
}
