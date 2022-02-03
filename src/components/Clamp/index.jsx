import axios from 'axios';
import { useEffect, useState } from 'react';
import sakurahome from '../../assets/sakurahome.jpeg';
import SClamp from './style';

export default function Clamp() {
  const [clamp, setClamp] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/clamp`).then(({ data }) => {
      setClamp(data);
    });
  }, []);

  return (
    <SClamp>
      <div className="home">
        <img src={sakurahome} alt="sakura" className="sakura" />
        <div className="textHome">
          {clamp.map((clamps) => {
            return (
              <p>
                <img
                  className="pictureProfile"
                  src={clamps.pictureProfile}
                  alt="profile"
                />
                <br />
                {clamps.nameAuthor}
                <br />
                Née le {clamps.birthday}
                <br />
                Son rôle dans le groupe est {clamps.task}
                <br />
                <br />
              </p>
            );
          })}
        </div>
      </div>
    </SClamp>
  );
}
