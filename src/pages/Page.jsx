import { Display, Form } from "../component/component"
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function Page({ showform }) {

  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const [cards, setCards] = useState([]);
  const [isDataDisplayed, setIsDataDisplayed] = useState(false);



  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
      setIsDataDisplayed(true);
    }
  }, []);




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
    setFormData({
      title:'',
      description: ''
    });
    localStorage.setItem('formData', JSON.stringify(formData));
    setIsDataDisplayed(true)
  }

  return (
    <div>
      <Form handleSubmit={handleSubmit} handleChange={handleChange} showform={showform}/>
      {cards.map((card, index) => (
        <Display key={index} title={card.title} description={card.description} isDataDisplayed={isDataDisplayed}/>
      ))}
      
    </div>
  )
} 

export default Page

Page.propTypes = {
  showform : PropTypes.string.isRequired
}