// MultipleCustomHooks.jsx
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
import "./HomePage.css";

export const HomePage = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(1);
  const url = `https://thesimpsonsapi.com/api/characters/${count}`;
  const { data, isLoading } = useFetch(url);
  const URLimage = `https://cdn.thesimpsonsapi.com/500/character/${count}.webp`;

  // Efecto para crear las estrellas
  useEffect(() => {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;

    const starsCount = 150;
    starsContainer.innerHTML = '';

    for (let i = 0; i < starsCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');

      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;

      starsContainer.appendChild(star);
    }
  }, []);

  return (
    <div className="space-app">
      {/* Fondo espacial */}
      <div className="space-container">
        <div className="stars" id="stars"></div>
        <div className="planet"></div>
      </div>

      {/* Contenido principal */}
      <div className="app-content">
        <h1 className="app-title">Los Simpson API</h1>
        <h2 className="app-subtitle">Explora el Universo de Los Simpson</h2>

        {/* Card del personaje */}
        <div className="character-card">
          {isLoading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <h3 className="loading-text">Cargando personaje...</h3>
            </div>
          ) : (
            <>
              <div className="character-image-container">
                <img
                  src={URLimage}
                  alt={`Imagen de ${data?.name}`}
                  className="character-image"
                />
                <div className="character-glow"></div>
              </div>

              <div className="character-info">
                <h3 className="character-name">{data?.name}</h3>
                <p className="character-status">Estado: {data?.status || "Desconocido"}</p>
                {data?.occupation && (
                  <p className="character-occupation">Ocupación: {data.occupation}</p>
                )}
              </div>
            </>
          )}
        </div>

        {/* Controles de navegación */}
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
      </div>
    </div>
  );
};