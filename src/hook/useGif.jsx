import axios from "axios";
import { useEffect, useState } from "react";
const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const useGif = (tag) => {
    const randomGifUrl = `https://api.giphy.com/v1/stickers/random?api_key=${GIPHY_API_KEY}&tag=&rating=g`
    const tagGifUrl = `https://api.giphy.com/v1/stickers/random?api_key=${GIPHY_API_KEY}&tag=${tag}`
    const [gif, setGif] = useState("")
    const [isloading, setIsLoading] = useState(false)

    async function fetchData(tag) {
        setIsLoading(true)
        try {
            const { data } = await axios.get(tag ? tagGifUrl : randomGifUrl)
            setGif(data.data.images.downsized_medium.url)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])
    return { fetchData, gif, isloading }
}

export default useGif