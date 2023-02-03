import { useState, useEffect } from "react"
import Image from "./Image"

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
        <div className="" id="recommended"></div>
            {!images ? <h2 className="flex items-center justify-center h-screen font-bold text-4xl text-center text-slate-800">Loading...</h2> :
                <section className="px-5 container mx-auto">
                    <h1  className="text-center font-bold text-4xl md:text-5xl lg:text-6xl my-20 recommended lg:mb-16 text-slate-800">Recommended for you</h1>

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mb-10">
                        {images.map((image) => (
                            <Image key={image.id} {...image} />
                        ))}
                    </div>
                </section>



            }
        </>
    )
}