import { useState, useEffect } from 'react';
import _ from 'lodash';
import axios from 'axios';
import './list.scss'

const List = () => {
  const [list, setList] = useState([]);

  // create function to fetch all crew members from db -- we will use useEffect hook
  useEffect(() => {
    const getList = async (e) => {
      try {
        const res = await axios.get('http://localhost:8080/api/crewMembers')
        console.log(res.data)
        setList(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getList();
  }, []);

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
            <button className="delete-button btn">Delete</button>
          </div>
        ))
      }

    </div>
  )
}

export default List