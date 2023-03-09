// Interfaces
import IAnime from "../interfaces/IAnime";
interface InfoApiProps {
  info: IAnime;
}

const InfoApi = ({ info }: InfoApiProps) => {
  return (
    <>
      {info.data && (
        <ul className="animes-list">
          {info.data.map((anime) => (
            <li key={anime.id}>
              <img
                src={anime.attributes.posterImage.small}
                alt={anime.attributes.canonicalTitle}
              />
              <h3>{anime.attributes.canonicalTitle}</h3>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default InfoApi;
