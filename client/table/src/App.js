import './App.css';
import Table from './components/Table/Table';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEntriesThunk } from '../src/redux/actions/getAllEntries';

function App() {
  const dispatch = useDispatch();
  const table = useSelector(store => store.table)

  useEffect(()=>{
    dispatch(getAllEntriesThunk())
    },[])
  return (

     <Table/>
  );
}

export default App;
