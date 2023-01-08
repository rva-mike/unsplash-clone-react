import { useState, useEffect } from "react"

export default function GetImages() {

    const [images, setImages] = useState([])

    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
            const data = await response.json()
            setImages(data)
        }

        fetchImages()
    }, [])




    return (
        <>
            <h1>{images.length}</h1>
        </>
    )
}