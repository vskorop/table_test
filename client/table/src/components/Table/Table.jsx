import React from 'react'
import Sort from '../Sort/Sort';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEntriesThunk } from '../../redux/actions/getAllEntries';

export default function Table() {
  // const dispatch = useDispatch();
  const table = useSelector((store) => store.table)
  const dispatch = useDispatch();
  const [data, setData] = useState(table)
  const [order, setOrder] = useState('ASC')
  const [input, setInput] = useState({});
  
  useEffect(()=>{
    setData(table)
  }, [table])

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: (e.target.value) }));
  };

const submitHandler = (e) => {
  e.preventDefault()
  console.log(data, input);
  switch (input.condition) {
    case 'equals':
      setData(data.filter(elem => elem[input.row] == input.value))
      break;
      case 'include':
      setData(data.filter(elem => 
        elem[input.row].toString().toLowerCase().includes(input.value)
      ))
      break;
      case 'more':
      setData(data.filter(elem => +elem[input.row] > +input.value))
      break;
      case 'less':
        setData(data.filter(elem =>  +elem[input.row] < +input.value ))
      break;
      default:
          break;
    }
}

  const sorting = (arg) => {
    if (order === 'ASC'){
      const sortedData = [...data].sort((a,b) => 
        a[arg] - b[arg]
      )
      console.log(data);
      console.log(order);
      setData(sortedData)
      setOrder('DESC')
    }
    if (order === 'DESC'){
      const sortedData = [...data].sort((a,b) => 
        b[arg] - a[arg]
      )
      console.log(data);
      console.log(order);
      setData(sortedData)
      setOrder('ASC')
    }
  }
  const sortingByName = (arg) => {
    if (order === 'ASC'){
      const sortedData = [...data].sort((a,b) => 
       a[arg].toLowerCase() > b[arg].toLowerCase() ? 1 : -1
      )
      console.log(data);
      setData(sortedData)
      setOrder('DESC')
    }
    if (order === 'DESC'){
      const sortedData = [...data].sort((a,b) => 
      a[arg].toLowerCase() < b[arg].toLowerCase() ? 1 : -1
      )
      console.log(data);
      setData(sortedData)
      setOrder('ASC')
    }
  }
const resetSubmit = () => {
  dispatch(getAllEntriesThunk())
}

  return (
    <div className="App flex flex-col">
    <Sort data={data} inputHandler={inputHandler} submitHandler={submitHandler} resetSubmit={resetSubmit} />
    <div className='flex justify-center'>
        <div className="overflow-x-auto w-3/5 ">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Дата</th>
        <th onClick={()=> sortingByName('name')}>Название</th>
        <th onClick={()=> sorting('number')}>Количество</th>
        <th onClick={()=> sorting('distance')}>Расстояние</th>
      </tr>
    </thead>
    <tbody>
     {data.length > 0? (data.map(elem => 
      <tr key={elem.id}>
        <th>{elem.date.slice(0, 10)}</th>
        <th>{elem.name}</th>
        <th>{elem.number}</th>
        <th>{elem.distance}</th>
      </tr>
      )): (<tr>
        <th>ничего не найдено</th>
      </tr>) }
    </tbody>
  </table>
</div></div>
</div>
  )
}
