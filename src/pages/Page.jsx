import { Display, Form } from "../component/component"
import { useState } from "react";

function Page({ showform }) {

  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const [cards, setCards] = useState([]);


  const handleChange = (event)=> {
    setFormData({
      ...formData,[event.target.name]: event.target.value,
    })
  }

  // const hanldeDelete = ()=>{
  //   const card = cards.filter((card) => card.index !== index)
  //   setCards(card)
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    const card = {
      title: event.target.title.value,
      description: event.target.description.value,
    };
    setCards([...cards, card]);
    setFormData({
      title:'',
      description: ''
    });
  }

  return (
    <div>
      <Form handleSubmit={handleSubmit} handleChange={handleChange} showform={showform}/>
      {cards.map((card, index) => (
        <Display key={index} title={card.title} description={card.description} />
      ))}
      
    </div>
  )
} 

export default Page