import './App.scss';
import List from './components/list';
import Form from './components/form';
import { useState } from 'react';

function App() {

  const [list, setList] = useState([]);
  const [name, setName] = useState('');



  return (
    <div className="App">
      <h1 className="title">Crew List</h1>
      <Form list={list} setList={setList} name={name} setName={setName} />
      <List list={list} setList={setList} name={name} setName={setName} />
    </div>
  );
}

export default App;
