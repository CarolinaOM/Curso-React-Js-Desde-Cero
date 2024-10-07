import { useState } from 'react';

export default function Welcomen(props) {
    // Cambiar la desestructuración de un objeto a una matriz
    const [counter, setCounter] = useState(0);
    const { message, name } = props;

    return (
        <div>
            <p>Hola {name}</p>
            <p>{message}</p>
            <h2>Contador de React con Hook</h2>
            <h4>El número del contador es {counter}</h4>
            <button type="submit" onClick={() => setCounter(counter + 1)}>Sumar Contador</button>
        </div>
    );
}