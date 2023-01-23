import { useContext, useState } from "react"
import { ImageContext } from "../App";

const SearchField = () => {

    const [searchValue, setSearchValue] = useState("");
    const { fetchData, setSearchImage } = useContext(ImageContext)

    const handleInputChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleButtonSearch = () => {
        fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
        setSearchValue("");
        setSearchImage(searchValue);
    }

    const handleEnterSearch = (e) => {
        if(e.key === 'Enter') {
            fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
            setSearchValue("");
            setSearchImage(searchValue);

        }
    }

  return (
    <div   className="flex">
        <input 
        className="bg-gray-50 border border-gray-300 text-small w-full indent-2 p-2.5 outline-none focus:border-purple-500 focus:ring-2 rounded-tl rounded-bl"
        type="search" 
        placeholder="search..."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
        />
        <button
        onClick={handleButtonSearch}
        disabled={!searchValue}
        // bg-blue-600
        className="bg-primary px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-purple-300 disabled:bg-violet-600 hover:bg-violet-600"
        >Search</button>
    </div>
  )
}

export default SearchField