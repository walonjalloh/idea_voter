import { useState } from "react"


function Vote() {
  
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  function handlelike(){
    setLike(like + 1);
    if(dislike >= 1){
      setDislike(dislike - 1)
    }else{
      setDislike(0)
    };
  }

  function handleDislike(){
    if (like >= 1){
      setLike(like - 1)
    }else{
      setLike(0)
    }
    setDislike(dislike + 1);
  }

 


  return (
    <div className="flex  justify-between sm:text-[10px] md:text-3xl">
      <button className="border-2 border-black  mx-2 px-2 md:px-4 md:mx-4 rounded-full" onClick={()=>(handlelike())}>Like: {like}</button>
      <button className="border-2 border-black mx-2 px-2 md:px-4 md:mx-4 rounded-full" onClick={()=>(handleDislike())}>Dislike: {dislike}</button>
    </div>
  )
}

export default Vote