import sakurahome from '../../assets/sakurahome.jpeg';
import sakuralogo from '../../assets/sakuralogo.png';
import SHome from './style';

function Home() {
  return (
    <SHome>
      <div className="home">
        <img src={sakuralogo} alt="logo" className="logo" />
        <img src={sakurahome} alt="sakura" className="sakura" />
        <div className="textHome">
          Bonjour à tous, ceci est un petit site en React sur Card Captor Sakura
          pour le CheckPoint 4 à la Wild, j&apos;espère que vous apprendrez
          plein de choses sur la série. Le site contient 4 catégories :
          Présentation générale de la série, information sur le groupe CLAMP les
          auteurs, la liste des épisodes,la list des volumes du manga et une
          liste des cartes de la série.
        </div>
      </div>
    </SHome>
  );
}

export default Home;
