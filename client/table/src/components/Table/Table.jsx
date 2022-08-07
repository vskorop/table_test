import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Table() {
  // const dispatch = useDispatch();
  const table = useSelector((store) => store.table)
  
  const [data, setData] = useState(table)
  const [order, setOrder] = useState('ASC')
  
  useEffect(()=>{
    setData(table)
  }, [table])

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


  return (
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
     {data.map(elem => 
      <tr key={elem.id}>
        <th>{elem.date.slice(0, 10)}</th>
        <th>{elem.name}</th>
        <th>{elem.number}</th>
        <th>{elem.distance}</th>
      </tr>
      )}
    </tbody>
  </table>
</div></div>
    
  )
}
