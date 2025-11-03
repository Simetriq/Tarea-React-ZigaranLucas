import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHooks = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(1);
  const url = `https://thesimpsonsapi.com/api/characters/${count}`;
  const { data, isLoading } = useFetch(url);
  const URLimage = `https://cdn.thesimpsonsapi.com/500/character/${count}.webp`

  return (
    <>
      <h1>Los simpsons API</h1>
      <h2>Personajes</h2>

      {/* <h3>
        {data?.id}{data?.name}
      </h3> */}

      {isLoading ? <h1>Cargando...</h1> : <h3>{data?.name}- {data?.status}</h3>}

      {isLoading ? <h1>Cargando...</h1> : <img src={URLimage} alt="Imagen de los simpson" />}

      <button onClick={() => handleDecrement(1)}
        disabled={count === 1 || isLoading}> Anterior </button>
      <button onClick={() => handleIncrement(1)} disabled={isLoading}>
        Siguiente
      </button>
    </>
  );
};
