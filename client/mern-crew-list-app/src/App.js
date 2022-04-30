import './App.scss';
import List from './components/list';
import Form from './components/form';

function App() {
  return (
    <div className="App">
      <h1 className="title">Crew List</h1>
      <Form />
      <List />
    </div>
  );
}

export default App;
