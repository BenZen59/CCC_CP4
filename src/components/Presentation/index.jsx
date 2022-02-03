import sakurahome from '../../assets/sakurahome.jpeg';
import SPresentation from './style';

function Presentation() {
  return (
    <SPresentation>
      <div className="home">
        <img src={sakurahome} alt="sakura" className="sakura" />
        <div className="textHome">
          Cardcaptor Sakura (カードキャプターさくら, Kādokyaputā Sakura),
          également connu sous le titre de Sakura, chasseuse de cartes dans la
          série télévisée ou abrégé en CCS, est un manga du groupe de
          dessinatrices CLAMP. Il est prépublié entre 1996 et 2000 dans le
          magazine Nakayoshi, et compilé en douze volumes reliés par Kōdansha.
          La version française est publiée par Pika Édition. La série est bien
          connue pour son accent très shōjo, la plupart des pages étant décorées
          de fleurs, de bulles, ou de scintillements autour des personnages
          principaux. Elle a remporté le prix Seiun du meilleur manga en 2001.
          La série animée basée sur le manga est constituée de 70 épisodes
          (trois saisons) diffusés entre 1998 et 2000, ainsi que deux films
          d&apos;animation, Cardcaptor Sakura, le film et Cardcaptor Sakura, le
          film 2 : La Carte scellée, et un dernier épisode spin-off de dix
          minutes intitulé Leave It to Kero! Theatrical Version, vient clore la
          série. La deuxième saison de la série télévisée a gagné le prix animé
          Animage en 1999. L&apos;intégralité de cette adaptation animée est
          éditée et commercialisée par IDP Home Video Music en France. La
          plupart des personnages de Card Captor Sakura sont présents dans
          d&apos;autres œuvres de CLAMP, comme Tsubasa Reservoir Chronicle, qui
          a également été adaptée en série animée.
        </div>
      </div>
    </SPresentation>
  );
}

export default Presentation;
