import _ from 'lodash';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './list.scss'

const List = ({ list, setList }) => {
  // const [list, setList] = useState([]);

  // create function to fetch all crew members from db -- we will use useEffect hook
  useEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/crewMembers')
        console.log("fetch crew list", res.data)
        setList(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getList();
  }, []);

  // create function to delete crew member when clicking on delete button
  const deleteCrewMember = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8080/api/crewMember/${id}`);
      const newList = list.filter(item => item._id !== id);
      setList(newList);
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="crew-list">
      {/* {_.map(list, (item) => {
        <div className="crew-member" key={item._id}>
          <p className="crew-member-name">{item.name}</p>
          <button className="update-button btn">Update</button>
          <button className="delete-button btn">Delete</button>
        </div>
      })} */}

      {
        list.map(item => (
          <div className="crew-member" key={item.id}>
            <p className="crew-member-name">{item.name}</p>
            <button className="update-button btn">Update</button>
            <button className="delete-button btn" onClick={() => { deleteCrewMember(item._id) }}>Delete</button>
          </div>
        ))
      }

    </div>
  )
}

export default List