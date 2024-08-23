import { Display, Form } from "../component/component"
import { useState } from "react";

function Page() {

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

  const hanldeDelete = ()=>{
    setFormData('')
    setCards([])
  }

  const  handleSubmit = (event) => {
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
      <Form handleSubmit={handleSubmit} handleChange={handleChange}/>
      {cards.map((card, index) => (
        <Display key={index} title={card.title} description={card.description} delete_idea={hanldeDelete}/>
      ))}
      
    </div>
  )
} 

export default Page