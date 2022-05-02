import './App.scss';
import List from './components/list';
import Form from './components/form';
import { useState } from 'react';

function App() {

  const [list, setList] = useState([]);

  return (
    <div className="App">
      <h1 className="title">Crew List</h1>
      <Form list={list} setList={setList} />
      <List list={list} setList={setList} />
    </div>
  );
}

export default App;
