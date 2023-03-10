const ImageFromSearch = ({ data }) => {
  return (
    <a href={data.urls.regular} target="_blank" rel="noreferrer">
        <img className="h-80 w-full object-cover my-2 mb-3 rounded-lg shadow-md" src={data.urls.small} alt={data.alt_description} />
    </a>
  )
}

export default ImageFromSearch