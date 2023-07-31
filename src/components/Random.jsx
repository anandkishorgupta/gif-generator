import useGif from "../hook/useGif";
import { Spinner } from "./Spinner";
const Random = () => {


const {gif,isloading ,fetchData}=useGif();




    return (
        <div className="flex flex-col items-center border border-black w-full bg-[#43D876] py-5 rounded-md">
            <h1 className="underline font-bold ">A RANDOM GIF</h1>
            <div className="h-60 flex justify-center items-center my-4">

                {
                    isloading ? (
                        <Spinner />
                    ) : (

                        <img src={gif} className="w-80 h-60 object-contain" />

                    )
                }
            </div>
            <button className="bg-[#C3F3D2] mt-5 py-2 rounded-md w-9/12" onClick={()=>fetchData()}>GENERATE</button>
        </div>
    )
}

export default Random