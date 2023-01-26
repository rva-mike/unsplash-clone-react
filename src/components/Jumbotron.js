
 const Jumbotron = ({ children }) => {
  return (
    <div id='search' className="bg-base-300 flex item-center py-10">
        <div className="max-w-md mx-auto w-full">   
            <h1 className="mt-12 text-white text-center text-2xl sm:text-2xl lg:text-3xl font-semibold font-bold mb-5">Find Images</h1>
            {children}
        </div>

    </div>
  )
}

export default Jumbotron