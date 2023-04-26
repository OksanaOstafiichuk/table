import { useState } from 'react';

export const NewUserForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handelSaveData = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'age':
        setAge(value);
        break;

      default:
        return;
    }
  };

  const handelSubmit = evt => {
    evt.preventDefault();

    onSubmit(name, email, age);
    setName('');
    setEmail('');
    setAge('');
  };

  return (
    <form id="form" onSubmit={handelSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handelSaveData}
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={email}
        onChange={handelSaveData}
      />
      <input
        type="text"
        name="age"
        placeholder="Age"
        value={age}
        onChange={handelSaveData}
      />

      <button type="submit" id="button">
        Save
      </button>
    </form>
  );
};
