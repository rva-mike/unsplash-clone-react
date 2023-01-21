const ImageFromSearch = ({ data }) => {
  return (
    <a href={data.urls.regular}>
        <img src={data.urls.small} alt={data.alt_description} />
    </a>
  )
}

export default ImageFromSearch