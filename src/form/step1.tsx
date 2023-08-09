import { SyntheticEvent, useState } from 'react';
import { User } from './form';

type PropsType = {
  changeStep: (step: 1 | 2 | 3 | 4) => void;
  updateUser: (user: User) => void;
};

export function Step1({ changeStep, updateUser }: PropsType) {
  const handleClick = () => {
    updateUser(form);
    changeStep(2);
  };

  const [form, setForm] = useState({ firstName: '' });

  const handleChange = (ev: SyntheticEvent) => {
    const controlElement = ev.target as HTMLFormElement;
    setForm({ ...form, [controlElement.name]: controlElement.value });
  };

  const isValid = () => {
    if (form.firstName === '') return false;
    return true;
  };

  return (
    <>
      <h2>Step 1</h2>

      <input
        type="text"
        placeholder="Dime tu nombre"
        name="firstName"
        onChange={handleChange}
        value={form.firstName}
      />

      {isValid() && <button onClick={handleClick}>Siguiente</button>}
    </>
  );
}
