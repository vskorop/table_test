import './App.css';
import Sort from './components/Sort/Sort';
import Table from './components/Table/Table';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllEntries } from '../src/redux/actions/getAllEntries';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllEntries())
    })
  return (
    <div className="App flex flex-col" >
      <Sort></Sort>
     <Table></Table>
    </div>
  );
}

export default App;
