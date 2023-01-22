import { useContext } from "react"
import { ImageContext } from "../App"
import ImageFromSearch from "./ImageFromSearch"
import Skeleton from "./Skeleton"

const SearchImages = () => {

    const { response, isLoading, searchImage } = useContext(ImageContext)

    return (
        <>
            <h1 className="text-center text-slate-800 font-bold mt-6  text-4xl md:text-4xl lg:text-5xl">Results for <span className="underline">{searchImage || 'creative'}</span></h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
                {isLoading ? <Skeleton item={10}/> : response.map((data, key) => <ImageFromSearch key={key} data={data} />)}
            </div>
        </>
    )
}

export default SearchImages