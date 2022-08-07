import React from 'react'

export default function Pagination({rowPerPage, totalRows, paginate}) {
    const pageNumbers = [1]

    for (let i = 1; i < Math.ceil(totalRows / rowPerPage) ; i++) {
        pageNumbers.push(i+1)
    }
  return (
    <div className="btn-group flex justify-center my-1">
        {pageNumbers.map(elem => 
            <a 
            onClick={()=> paginate(elem)}
            href="!#"
            key={elem}
            className="btn btn-md">{elem}</a>)}
    
  </div>
  )
}
