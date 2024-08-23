import { useState } from "react"


function Vote( {delete_idea}) {
  
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  function handlelike(){
    setLike(like + 1);
  }

  function handleDislike(){
    setDislike(dislike + 1);
  }

  function handleReset(){
    setLike(0)
    setDislike(0)
  }


  return (
    <div className="flex  justify-between sm:text-[5px] md:text-2xl">
      <button className="border-2 border-black  mx-1 px-1 md:px-3 md:mx-2 rounded-full" onClick={()=>(handlelike())}>Like: {like}</button>
      <button className="border-2 border-black mx-1 px-1 md:px-3 md:mx-2 rounded-full" onClick={()=>(handleReset())}>Reset</button>
      <button className="border-2 border-black mx-1 px-1 md:px-3 md:mx-2 rounded-full" onClick={delete_idea}>Delete Idea</button>
      <button className="border-2 border-black mx-1 px-1 md:px-3 md:mx-2 rounded-full" onClick={()=>(handleDislike())}>Dislike: {dislike}</button>
    </div>
  )
}

export default Vote