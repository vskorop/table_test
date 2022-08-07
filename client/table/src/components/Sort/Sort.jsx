import React from 'react'

export default function Sort({inputHandler,submitHandler,resetSubmit}) {

  return (
  <div className="form-control"> 
    <form onSubmit={submitHandler}>
      <div>  
        <select 
        name='row'
        onChange={inputHandler}
        className="select w-full max-w-xs my-1">
          <option defaultValue={'Выберите колонку'} >Выберите колонку</option>
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
          <option value={'more'}>Больше</option>
          <option value={'less'}>Меньше</option>
        </select>
      </div>
      <div>
      <button 
      onClick={resetSubmit}
       type='submit'
       className="btn-md">Отчистить</button>
        <input 
        // value={input}
        name='value'
        onChange={inputHandler}
        type="text" 
        placeholder="Фильтр" 
        className="input w-full max-w-xs my-1" />
       <button 
       type='submit'
       className="btn-md">Ok</button>
       </div>
    </form>
  </div>
  )
}
