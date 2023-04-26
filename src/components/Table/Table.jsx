import { useState } from 'react';

const fieldArray = [
  { field: 'id', fieldName: 'ID' },
  { field: 'name', fieldName: 'NAME' },
  { field: 'email', fieldName: 'E-MAIL' },
  { field: 'age', fieldName: 'AGE' },
];

export const Table = ({ data }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [rowId, setRowId] = useState(undefined);
  const [editedRow, setEditedRow] = useState();

  const handelEdit = id => {
    setIsEdit(true);
    setEditedRow(undefined);
    setRowId(id);
  };

  const handelChangeData = (evt, id) => {
    const { name, value } = evt.currentTarget;
    setEditedRow({
      id: id,
      [name]: value,
    });
  };

  const handelSave = () => {
    setIsEdit(false);

    data.map(element => {
      if (element.id === editedRow.id) {
        if (editedRow.name) element.name = editedRow.name;
        if (editedRow.email) element.email = editedRow.email;
        if (editedRow.age) element.age = editedRow.age;
      }
      return element;
    });

    setEditedRow(undefined);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {fieldArray.map(el => {
              return <th key={el.field}>{el.fieldName}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map(el => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>
                  {isEdit && rowId === el.id ? (
                    <input
                      type="text"
                      name="name"
                      id={el.id}
                      defaultValue={editedRow ? editedRow.name : el.name}
                      onChange={evt => handelChangeData(evt, el.id)}
                    />
                  ) : (
                    el.name
                  )}
                </td>
                <td>
                  {isEdit && rowId === el.id ? (
                    <input
                      type="text"
                      name="email"
                      id={el.id}
                      defaultValue={editedRow ? editedRow.email : el.email}
                      onChange={evt => handelChangeData(evt, el.id)}
                    />
                  ) : (
                    el.email
                  )}
                </td>
                <td>
                  {isEdit && rowId === el.id ? (
                    <input
                      type="text"
                      name="age"
                      id={el.id}
                      defaultValue={editedRow ? editedRow.age : el.age}
                      onChange={evt => handelChangeData(evt, el.id)}
                    />
                  ) : (
                    el.age
                  )}
                </td>
                <td>
                  {isEdit && rowId === el.id ? (
                    <button type="button" onClick={() => handelSave(el.id)}>
                      save
                    </button>
                  ) : (
                    <button type="button" onClick={() => handelEdit(el.id)}>
                      edit
                    </button>
                  )}
                  <button type="button">delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
