import { Display, Form } from "../component/component"
import { useState } from "react";

function Page() {

  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const  handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      title: event.target.title.value,
      description: event.target.description.value,
    });
  }

  return (
    <div>
      <Form handleSubmit={handleSubmit}/>
      <Display title={formData.title} description={formData.description}/>
    </div>
  )
}

export default Page