import axios from 'axios';
import { useEffect, useState } from 'react';
import sakurahome from '../../assets/sakurahome.jpeg';
import SManga from './style';

export default function Manga() {
  const [manga, setManga] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/manga`).then(({ data }) => {
      setManga(data);
    });
  }, []);

  return (
    <SManga>
      <div className="home">
        <img src={sakurahome} alt="sakura" className="sakura" />
        <div className="textHome">
          {manga.map((mangas) => {
            return (
              <p>
                <img className="cover" src={mangas.coverUrl} alt="cover" />
                <br />
                Volume : {mangas.numberVolume}
                <br />
                Chapitre : {mangas.chapterVolume}
                <br />
                {mangas.edition}
                <br />
                <br />
              </p>
            );
          })}
        </div>
      </div>
    </SManga>
  );
}
