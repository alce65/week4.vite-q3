import { SyntheticEvent, useEffect, useState } from 'react';
import './counter.scss';

export function Counter() {
  const initialCounter = 0;

  const [counter, setCounter] = useState(initialCounter);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const input = (ev.target as HTMLFormElement).elements.item(0);
    const value = (input as HTMLInputElement).value;
    (ev.target as HTMLFormElement).reset();
    setCounter(+value);
  };

  const changeCounter = (value: number) => {
    if (value === 0) {
      setCounter(initialCounter);
      return;
    }
    setCounter(counter + value);
  };

  return (
    <>
      <h2 className={counter > 10 ? 'red' : ''}>Counter</h2>
      <div>{counter}</div>
      <div className="buttons">
        <button onClick={() => changeCounter(1)}>+</button>
        <button onClick={() => changeCounter(-1)}>-</button>
        <button onClick={() => changeCounter(0)}>reset</button>
      </div>
      {counter > 5 && <p>Vas bien</p>}

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Valor de contador" />
        <button type="submit">Aceptar</button>
      </form>
    </>
  );
}
