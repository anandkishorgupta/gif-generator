import { useState } from "react";
import useGif from "../hook/useGif";
import { Spinner } from "./Spinner";
const Tag = () => {
    // const [gif, setGif] = useState("")
    // const [isloading, setIsLoading] = useState(false)
    const [tag, setTag] = useState("")
    const { gif, isloading, fetchData } = useGif(tag);
    // async function fetchData() {
    //     setIsLoading(true)
    //     try {
    //         const { data } = await axios.get(`https://api.giphy.com/v1/stickers/random?api_key=${GIPHY_API_KEY}&tag=${tag}`)
    //         setGif(data.data.images.downsized_medium.url)
    //         console.log(data)
    //         console.log(gif)
    //         setIsLoading(false)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // function clickHandler() {
    //     fetchData();
    // }
    // useEffect(() => {
    //     fetchData();
    // }, [])
    return (
        <div className="flex flex-col items-center border border-black w-full bg-blue-500 py-5 rounded-md mt-10 mb-4">
            <h1 className="underline font-bold uppercase "> RANDOM <span className="text-white">{tag}</span> GIF</h1>
            <div className="h-60 flex justify-center items-center">

                {
                    isloading ? (
                        <Spinner />
                    ) : (

                        <img src={gif} className="w-80 h-60 object-contain" />

                    )
                }
            </div>
            <input className="mt-5 py-1 rounded-md w-9/12 text-center" onChange={(event) => setTag(event.target.value)} value={tag} />
            <button className="bg-[#C3F3D2] mt-5 py-2 rounded-md w-9/12" onClick={() => fetchData(tag)}>GENERATE</button>
        </div>
    )
}

export default Tag