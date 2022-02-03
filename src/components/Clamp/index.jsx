import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Clamp() {
  const [clamp, setClamp] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/clamp`).then(({ data }) => {
      setGlaucomas(data);
    });
  }, []);

  return (
    <>
      {clamp.map((clamp) => {
        return (
          <p>
            {clamp.nameAuthor}
            {clamp.birthday}
            {clamp.task}
          </p>
        );
      })}
    </>
  );
}
