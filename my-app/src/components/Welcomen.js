import { useState } from 'react';

export default function Welcomen(props) {
    const [counter, setCounter] = useState(0);
    const [semaforo, setSemafoto] = useState(false);
    const { message, name } = props;

    const contar = () =>{
        setCounter(counter+1);
        setSemafoto(!semaforo)
    }
    console.log(semaforo);
    return (
        <div>
            <p>Hola {name}</p>
            <p>{message}</p>
            <h2>Contador de React con Hook</h2>
            <h4>El número del contador es {counter}</h4>
            <p>El semáforo está en color {semaforo ? 'red' : 'green'}</p>
            <button type='submit' onClick={contar}>Sumar Contador</button>
        </div>
    );
}