import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEntries } from '../../redux/actions/getAllEntries';

export default function Table() {
 const table = useSelector((store) => store.table)
  const dispatch = useDispatch();
  useEffect(()=>{
  dispatch(getAllEntries())
  },[])

  return (
    <div className='flex justify-center'>
        <div className="overflow-x-auto w-3/5 ">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
     {/* <!-- row 1 --> */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* <!-- row 2 --> */}
    </tbody>
  </table>
</div></div>
    
  )
}
