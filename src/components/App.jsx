import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { NewUserForm } from './NewUserForm/NewUserForm';
import { Table } from './Table/Table';
import './App.css';

const fieldArray = [
  { field: 'id', fieldName: 'ID' },
  { field: 'name', fieldName: 'NAME' },
  { field: 'email', fieldName: 'E-MAIL' },
  { field: 'age', fieldName: 'AGE' },
  { field: 'button', fieldName: '' },
];

export const App = () => {
  const [dataTable, setDataTable] = useState([]);
  const [btnSort, setBtnSort] = useState(false);

  const addUser = (name, email, age) => {
    const user = { id: uuidv4(), name, email, age };
    setDataTable(prevState => [...prevState, user]);
  };

  const handelSortByName = () => {
    if (!btnSort) {
      const dataBySort = [...dataTable].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setDataTable(dataBySort);
      setBtnSort(!btnSort);
    } else {
      const dataBySort = [...dataTable].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      setDataTable(dataBySort);
      setBtnSort(!btnSort);
    }
  };

  const handelSortByAge = () => {
    if (!btnSort) {
      const dataBySort = [...dataTable].sort((a, b) => a.age - b.age);
      setDataTable(dataBySort);
      setBtnSort(!btnSort);
    } else {
      const dataBySort = [...dataTable].sort((a, b) => b.age - a.age);
      setDataTable(dataBySort);
      setBtnSort(!btnSort);
    }
  };

  const handelRemove = id => {
    setDataTable(prevState =>
      dataTable.filter(el => {
        return el.id !== id;
      })
    );
  };

  return (
    <div className="container">
      <h1 className="title">Table Data</h1>
      <NewUserForm onSubmit={addUser} />
      <div className="sort">
        <button type="button" className="sortBtn" onClick={handelSortByName}>
          Sort by name
        </button>
        <button type="button" className="sortBtn" onClick={handelSortByAge}>
          Sort by age
        </button>
      </div>
      <Table data={dataTable} table={fieldArray} onRemove={handelRemove} />
    </div>
  );
};
