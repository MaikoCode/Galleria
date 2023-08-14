import { Link } from "react-router-dom"
import { useContext } from "react"
import { ExpositionContext } from "../context/ExpositionContext"

// eslint-disable-next-line react/prop-types
export default function PaintingCard({imgSrc, title, artist}) {
    const { setIsExposing, setManualExposingPath } = useContext(ExpositionContext);

    return (
        <Link to={`/details/${title}`} onClick={
            () => {
                setIsExposing(true);
                setManualExposingPath(`/details/${title}`);
            }
        }>
            <div className="relative sm:w-64 sm:h-80 my-4 cursor-pointer">
                <img src={ "/Galleria/"+ imgSrc} alt={title} className="w-full h-full object-cover hover:opacity-70"/>
                <div className="absolute bottom-[12%]  text-white p-4">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p className="text-sm opacity-75">{artist}</p>
                </div>
            </div>
        </Link>
    )
}
