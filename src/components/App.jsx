import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NewUserForm } from './NewUserForm/NewUserForm';
import { Table } from './Table/Table';

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

  return (
    <div>
      Create table
      <NewUserForm onSubmit={addUser} />
      <button type="button" onClick={handelSortByName}>
        Sort by name
      </button>
      <button type="button" onClick={handelSortByAge}>
        Sort by age
      </button>
      <Table data={dataTable} />
    </div>
  );
};
