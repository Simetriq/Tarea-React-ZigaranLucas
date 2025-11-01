import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHooks = () => {

  const { count, handleIncrement, handleDecrement } = useCounter(1);
  const url = `https://thesimpsonsapi.com/api/characters/${count}`;
  const { data, isLoading } = useFetch(url);

  return (
    <>
      <h1>Los simpsons API</h1>
      <h2>Personajes</h2>

      {/* <h3>
        #{data?.id}-{data?.name}
      </h3> */}

      {isLoading ? <h1>Cargando...</h1> : <h3>{data?.name}</h3>}

      <button onClick={() => handleDecrement(1)}
        disabled={count === 1 || isLoading}> Anterior </button>
      <button onClick={() => handleIncrement(1)} disabled={isLoading}>
        Siguiente
      </button>
    </>
  );
};
