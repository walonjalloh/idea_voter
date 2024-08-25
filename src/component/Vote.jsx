import { useState } from "react"


function Vote() {
  
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  function handlelike(){
    setLike(like + 1);
    setDislike(dislike -1);
  }

  function handleDislike(){
    setLike(like - 1);
    setDislike(dislike + 1);
  }

  function handleReset(){
    setLike(0)
    setDislike(0)
  }


  return (
    <div className="flex  justify-between sm:text-[10px] md:text-3xl">
      <button className="border-2 border-black  mx-2 px-2 md:px-4 md:mx-4 rounded-full" onClick={()=>(handlelike())}>Like: {like}</button>
      <button className="border-2 border-black mx-2 px-2 md:px-4 md:mx-4 rounded-full" onClick={()=>(handleReset())}>Reset</button>
      <button className="border-2 border-black mx-2 px-2 md:px-4 md:mx-4 rounded-full" onClick={()=>(handleDislike())}>Dislike: {dislike}</button>
    </div>
  )
}

export default Vote