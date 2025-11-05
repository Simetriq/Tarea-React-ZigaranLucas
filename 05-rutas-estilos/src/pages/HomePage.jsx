// HomePage.jsx
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
import { Loading } from "../components/Loading";
import { CharacterInfo } from "../components/CharacterInfo";
import "./HomePage.css";

export const HomePage = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(1);
  const url = `https://thesimpsonsapi.com/api/characters/${count}`;
  const { data, isLoading } = useFetch(url);
  const URLimage = `https://cdn.thesimpsonsapi.com/500/character/${count}.webp`;

  // Efecto para crear las estrellas (igual)
  useEffect(() => {
    // ... mismo código de las estrellas
  }, []);
  const handleDeleted = () => {
    localStorage.removeItem("isLogged");
    console.log("object")
  };

  return (
    <div className="space-app">
      {/* Fondo espacial (igual) */}
      <div className="space-container">
        <div className="stars" id="stars"></div>
        <div className="planet"></div>
      </div>

      {/* Contenido principal */}
      <div className="app-content">
        <h1 className="app-title">Los Simpson API</h1>
        <h2 className="app-subtitle">Explora el Universo de Los Simpson</h2>

        {/* Card del personaje - AHORA COMPONENTIZADO */}
        <div className="character-card">
          {isLoading ? (
            <Loading />
          ) : (
            <CharacterInfo character={data} imageUrl={URLimage} />
          )}
        </div>

        {/* Controles de navegación (igual) */}
        <div className="navigation-controls">
          <button
            onClick={() => handleDecrement(1)}
            disabled={count === 1 || isLoading}
            className="nav-button prev-button"
          >
            ← Anterior
          </button>

          <span className="character-count">Personaje #{count}</span>

          <button
            onClick={() => handleIncrement(1)}
            disabled={isLoading}
            className="nav-button next-button"
          >
            Siguiente →
          </button>

        </div>
        <div>
          <button onClick={() => handleDeleted()}>Eliminar localStorage</button>
        </div>
      </div>
    </div>
  );
};