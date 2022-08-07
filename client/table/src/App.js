import './App.css';
import Table from './components/Table/Table';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllEntriesThunk } from '../src/redux/actions/getAllEntries';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllEntriesThunk())
    },[dispatch])
  return (
     <Table/>
  );
}

export default App;
