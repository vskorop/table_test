import React from 'react'

export default function Pagination({rowPerPage, totalRows, paginate}) {
    const pageNumbers = [1]

    for (let i = 1; i < Math.ceil(totalRows / rowPerPage) ; i++) {
        pageNumbers.push(i+1)
    }
  return (
    <div class="btn-group flex justify-center">
        {pageNumbers.map(elem => 
            <a 
            onClick={()=> paginate(elem)}
            href="!#"
            key={elem}
            class="btn btn-md">{elem}</a>)}
    
  </div>
  )
}
