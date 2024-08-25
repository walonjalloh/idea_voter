import { Display, Form } from "../component/component"
import { useState} from "react";
import PropTypes from 'prop-types';

function Page({ showform }) {

  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const [cards, setCards] = useState([]);
  
  function save(){
    localStorage.setItem('ideas', JSON.stringify(cards));
  }
  // useEffect(() => {
  //   const savedCard = JSON.parse(localStorage.getItem('cards')) || [];
  //   setCards(savedCard);
  // },[])

  // useEffect(() => {
  //   localStorage.setItem('cards', JSON.stringify(cards));
  // }, [cards]);

  const handleChange = (event)=> {
    setFormData({
      ...formData,[event.target.name]: event.target.value,
    })
  }



  const handleSubmit = (event) => {
    event.preventDefault();
    const card = {
      title: event.target.title.value,
      description: event.target.description.value,
    };
    setCards([...cards, card]);
  
    event.target.reset();
  
  }

  return (
    <div>
      <Form handleSubmit={handleSubmit} handleChange={handleChange} showform={showform}/>
      {cards.map((card, index) => (
        <Display key={index}  card={card} save={save}/>
      ))}
      
    </div>
  )
} 

export default Page

Page.propTypes = {
  showform : PropTypes.bool.isRequired
}