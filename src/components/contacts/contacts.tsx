import { SyntheticEvent } from 'react';

type Contact = {
  userName: string;
  email: string;
  passwd: string;
  isOkConditions: boolean;
  turn: string;
  course: string;
};

export function Contacts() {
  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const userData: Contact = {} as Contact;

    userData.userName = (
      form.elements.namedItem('userName') as HTMLInputElement
    ).value;
    userData.email = (
      form.elements.namedItem('email') as HTMLInputElement
    ).value;
    userData.passwd = (
      form.elements.namedItem('passwd') as HTMLInputElement
    ).value;
    userData.isOkConditions = (
      form.elements.namedItem('isOkConditions') as HTMLInputElement
    ).checked;
    userData.turn = (form.elements.namedItem('turn') as HTMLInputElement).value;
    userData.course = (
      form.elements.namedItem('course') as HTMLInputElement
    ).value;

    console.log('Enviando', userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Contacta con nosotros</legend>

      <div className="group-control">
        <input
          type="text"
          name="userName"
          placeholder="Dime tu nombre"
          required
        />
      </div>

      <div className="group-control">
        <input type="email" name="email" placeholder="Dime tu email" required />
      </div>

      <div className="group-control">
        <input
          type="password"
          name="passwd"
          placeholder="Dime tu password"
          required
        />
      </div>

      <div className="group-control">
        <input type="checkbox" name="isOkConditions" id="is-ok" />
        <label htmlFor="is-ok">Acepto las condiciones...</label>
      </div>

      <fieldset>
        <legend>Selecciona un turno</legend>
        <input type="radio" name="turn" id="turno-m" value="M" />
        <label htmlFor="turno-m">Mañana</label>
        <input type="radio" name="turn" id="turno-t" value="T" />
        <label htmlFor="turno-t">Tarde</label>
        <input type="radio" name="turn" id="turno-n" value="N" />
        <label htmlFor="turno-n">Noche</label>
      </fieldset>

      <label htmlFor="course">Elige un curso</label>
      <select name="course" id="course">
        <option value=""></option>
        <option value="A">Angular</option>
        <option value="R">React</option>
        <option value="N">Node</option>
      </select>

      <button type="submit">Enviar</button>
    </form>
  );
}
