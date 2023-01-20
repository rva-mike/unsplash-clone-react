
const SearchField = () => {
  return (
    <div className="flex">
        <input 
        className="bg-gray-50 border border-gray-300 text-small w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
        type="search" 
        placeholder="search..."
        />
        <button>Search</button>
    </div>
  )
}

export default SearchField