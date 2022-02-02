import sakurahome from '../../assets/sakurahome.jpeg';
import SHome from './style';

function Home() {
  return (
    <SHome>
      <div>
        <img src={sakurahome} alt="sakura" className="sakura" />
        <div className="textHome">
          Bonjour à tous, ceci est un petit site en React sur Card Captor Sakura
          pour le CheckPoint 4 à la Wild, j&apos;espère que vous apprendrez
          plein de choses sur la série
        </div>
      </div>
    </SHome>
  );
}

export default Home;
