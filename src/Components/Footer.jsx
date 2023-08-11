import Buttons from "../Components/Buttons"

// eslint-disable-next-line react/prop-types
export default function Footer({name, artist}) {
  return (
    <div className="flex justify-between m-4 pt-5">
      <span className="flex flex-col">
        <span className="font-bold text-sm">{name}</span>
        <span className="text-sm">{artist}</span>
      </span>
      <Buttons />  
    </div>
  )
}
