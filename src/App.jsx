import Random from "./components/Random";
import Tag from "./components/Tag";
const App = () => {

  return (
    <div className="background w-full h-full flex flex-col items-center">
      <h1 className="uppercase  text-center bg-white rounded-lg py-2 mt-16 font-bold text-lg w-10/12">random gifs</h1>
      <div className="flex flex-col items-center w-1/2 mt-5">
        <Random />
        <Tag />
      </div>
    </div>
  )
}

export default App;
