import { useEffect, useState } from "react";
import { getGifs } from "../helpers/gifs";

export const useFetchGifs = ( item ) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true )


    const getImages = async() => {
        const newImages = await getGifs(item);
        setImages(newImages);
        setIsLoading( false );
    }

    useEffect(() => {
      getImages()
    }, [])

    return {
        images,
        isLoading
    } 
}
