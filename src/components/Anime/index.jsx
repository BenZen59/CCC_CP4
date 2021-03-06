import axios from 'axios';
import { useEffect, useState } from 'react';
import sakurahome from '../../assets/sakurahome.jpeg';
import SAnime from './style';

export default function Manga() {
  const [anime, setAnime] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/anime`).then(({ data }) => {
      setAnime(data);
    });
  }, []);

  return (
    <SAnime>
      <div className="home">
        <img src={sakurahome} alt="sakura" className="sakura" />
        <div className="textHome">
          {anime.map((animes) => {
            return (
              <p>
                {animes.titleEpisode}
                <br />
                Episode {animes.numberEpisode}
                <br />
                {animes.airingDate}
                <br />
                {animes.nameTV}
                <br />
                <br />
              </p>
            );
          })}
        </div>
      </div>
    </SAnime>
  );
}
