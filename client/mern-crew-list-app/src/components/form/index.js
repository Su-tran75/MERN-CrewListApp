import { useState } from 'react';
import axios from 'axios';
import './form.scss'

const Form = ({ list, setList }) => {
  const [name, setName] = useState('');

  // add new crew member to db
  const addCrewMember = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/crewMember', { name: name })
      setList(prev => [...prev, res.data])
      console.log(res);
      setName('');
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className="form" onSubmit={e => addCrewMember(e)}>
      <input className="input-form" type="text" placeholder="Enter Name" onChange={(e) => { setName(e.target.value); }} value={name} />
      <button className="add-button" type="submit">Add</button>
    </form>
  )
}

export default Form