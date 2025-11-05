// components/CharacterInfo.jsx
export const CharacterInfo = ({ character, imageUrl }) => {
  return (
    <>
      <div className="character-image-container">
        <img
          src={imageUrl}
          alt={`Imagen de ${character?.name}`}
          className="character-image"
        />
        <div className="character-glow"></div>
      </div>

      <div className="character-info">
        <h3 className="character-name">{character?.name}</h3>
        <p className="character-status">Estado: {character?.status || "Desconocido"}</p>
        {character?.occupation && (
          <p className="character-occupation">Ocupación: {character.occupation}</p>
        )}
      </div>
    </>
  )
}