import React, { useState } from 'react'

export default function Sort() {

  const [input, setInput] = useState({});

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: (e.target.value) }));
    console.log(input);
  };

  return (
  <div className="form-control "> 
    <form action="">
      <div>  
        <select 
        name='Row'
        onChange={inputHandler}
        className="select w-full max-w-xs my-1">
          <option defaultValue={'Выберите колонку'} >Выберите колонку</option>
          <option value={'date'}>Дата</option>
          <option value={'name'}>Название</option>
          <option value={'number'}>Количество</option>
          <option value={'distance'}>Расстояние</option>
        </select>
      </div>
      <div>
        <select 
        name="condition"
        onChange={inputHandler}
        className="select w-full max-w-xs my-1">
          <option defaultValue={'d'} disabled selected>Условие</option>
          <option value={'equals'}>Равно</option>
          <option value={'include'}>Содержит</option>
          <option value={'asc'}>Больше</option>
          <option value={'desc'}>Меньше</option>
        </select>
      </div>
      <div>
        <input 
        // value={input}
        name='value'
        onChange={inputHandler}
        type="text" 
        placeholder="Фильтр" 
        className="input w-full max-w-xs my-1" />
       </div>
    </form>
  </div>
  )
}
