import { useState } from "react"


function Vote() {
  
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
    <div>
      <button className="border-2 border-black px-3 mx-2 rounded-full" onClick={()=>(handlelike())}>Like: {like}</button>
      <button className="border-2 border-black px-3 mx-2 rounded-full" onClick={()=>(handleReset())}>Reset</button>
      <button className="border-2 border-black px-3 mx-2 rounded-full" onClick={()=>(handleDislike())}>Dislike: {dislike}</button>
    </div>
  )
}

export default Vote