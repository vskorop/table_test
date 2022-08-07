import React from "react";
import Sort from "../Sort/Sort";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";

export default function Table() {
  // забираем из стора все записи из бд
  const table = useSelector((store) => store.table);
  // стейт data будет хранить все записи из бд
  const [data, setData] = useState(table);
  // создаем флаг для сортировки
  const [order, setOrder] = useState("ASC");
  // стейт для получениия объекта с параметрами для фильтра( {row: 'row_name', condition: 'include', value: 'value'})
  const [input, setInput] = useState({});
  // стейт для пагинации
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage] = useState(5);
  // при изменении table изменим data под измененный table
  useEffect(() => {
    setData(table);
  }, [table]);
  // переменные для подсчета количества записей на странице и отслеживания
  const lastRowIndex = currentPage * rowPerPage;
  const firtsRowIndex = lastRowIndex - rowPerPage;
  const currentRow = data.slice(firtsRowIndex, lastRowIndex);

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    switch (input.condition) {
      case "equals":
        setData(
          data.filter((elem) => elem[input.row].toString() === input.value)
        );
        break;
      case "include":
        setData(
          data.filter((elem) =>
            elem[input.row].toString().toLowerCase().includes(input.value)
          )
        );
        break;
      case "more":
        setData(data.filter((elem) => +elem[input.row] > +input.value));
        break;
      case "less":
        setData(data.filter((elem) => +elem[input.row] < +input.value));
        break;
      default:
        break;
    }
  };
  // сортировка по расстоянию и номеру
  const sorting = (arg) => {
    if (order === "ASC") {
      const sortedData = [...data].sort((a, b) => a[arg] - b[arg]);
      setData(sortedData);
      setOrder("DESC");
    }
    if (order === "DESC") {
      const sortedData = [...data].sort((a, b) => b[arg] - a[arg]);
      setData(sortedData);
      setOrder("ASC");
    }
  };
  //сортировка по имени
  const sortingByName = (arg) => {
    if (order === "ASC") {
      const sortedData = [...data].sort((a, b) =>
        a[arg].toLowerCase() > b[arg].toLowerCase() ? 1 : -1
      );
      setData(sortedData);
      setOrder("DESC");
    }
    if (order === "DESC") {
      const sortedData = [...data].sort((a, b) =>
        a[arg].toLowerCase() < b[arg].toLowerCase() ? 1 : -1
      );
      setData(sortedData);
      setOrder("ASC");
    }
  };
  // очистка поля ввода и списков
  const resetSubmit = () => {
    window.location.reload(false);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App flex flex-col">
      <Sort
        data={data}
        inputHandler={inputHandler}
        submitHandler={submitHandler}
        resetSubmit={resetSubmit}
      />
      <Pagination
        rowPerPage={rowPerPage}
        totalRows={data.length}
        paginate={paginate}
      />
      <div className="flex justify-center">
        <div className="overflow-x-auto w-3/5 ">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Дата</th>
                <th onClick={() => sortingByName("name")}>Название</th>
                <th onClick={() => sorting("number")}>Количество</th>
                <th onClick={() => sorting("distance")}>Расстояние</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                currentRow.map((elem) => (
                  <tr key={elem.id}>
                    <th>{elem.date.slice(0, 10)}</th>
                    <th>{elem.name}</th>
                    <th>{elem.number}</th>
                    <th>{elem.distance}</th>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>ничего не найдено</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
