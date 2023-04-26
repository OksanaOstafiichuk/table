import { useState } from 'react';

const fieldArray = [
  { field: 'id', fieldName: 'ID' },
  { field: 'name', fieldName: 'NAME' },
  { field: 'email', fieldName: 'E-MAIL' },
  { field: 'age', fieldName: 'AGE' },
];

export const Table = ({ data }) => {
  const [editName, setEditName] = useState(false);
  const [ediEmail, setEditEmail] = useState(false);
  const [ediAge, setEditAge] = useState(false);

  const handelEdit = (e, id) => {
    console.log('click');
    console.log(id);
    console.log(e.target.element);

    setEditName(true);
  };

  const handelChangeData = evt => {
    const { name, value } = evt.currentTarget;
    console.log(value);
    console.log(name);
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
                <td onClick={e => handelEdit(e, el.id)}>
                  {editName ? (
                    <input
                      type="text"
                      name="name"
                      id={el.id}
                      onChange={handelChangeData}
                    />
                  ) : (
                    el.name
                  )}
                </td>
                <td>{el.email}</td>
                <td>{el.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
