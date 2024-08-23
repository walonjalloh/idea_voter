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
      <button onClick={()=>(handlelike())}>Like {like}</button>
      <button onClick={()=>(handleDislike())}>Dislike {dislike}</button>
    </div>
  )
}

export default Vote