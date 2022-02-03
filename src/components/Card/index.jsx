import axios from 'axios';
import { useEffect, useState } from 'react';
import sakurahome from '../../assets/sakurahome.jpeg';
import SCard from './style';

export default function Card() {
  const [card, setCard] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/card`).then(({ data }) => {
      setCard(data);
    });
  }, []);

  return (
    <SCard>
      <div className="home">
        <img src={sakurahome} alt="sakura" className="sakura" />
        <div className="textHome">
          {card.map((cards) => {
            return (
              <p>
                <img className="card" src={cards.urlPicture} alt="card" />
                <br />
                {cards.nameCard}
                <br />
                <br />
              </p>
            );
          })}
        </div>
      </div>
    </SCard>
  );
}
