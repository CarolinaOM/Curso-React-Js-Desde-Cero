export default function Welcomen(props){
    console.log(props);
    const {message, name} = props;

    return(
        <div>
            <p>Hola {name}</p>
            <p>{message}</p>
        </div>
    );
}