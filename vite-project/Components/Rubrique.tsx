//pages
import './Rubrique.css'
import Games from '../Pages/Games'

//images
import GoldenEye from '../src/assets/Images/007.png';
import Banjo from '../src/assets/Images/Banjo.png';
import DonkeyKong from '../src/assets/Images/DonkeyKong.png';
import EarthBound from '../src/assets/Images/EarthBound.png';
import marioKart from '../src/assets/Images/marioKart.png';
import Spyro from '../src/assets/Images/Spyro.png';
import superMario from '../src/assets/Images/superMario.png';
import Zelda from '../src/assets/Images/Zelda.png';
import BestGames from '../src/assets/Images/bestGames.png'
import DecoPage1 from '../src/assets/Images/decoPage1.png'

function Rubrique() {
    return (
        <>
            <div className="hero">
                <div className="recommandations">
                    <h1>Recommandés pour vous</h1>
                    <a className="voirTout1" href="games">voir tout</a>
                </div>
                <div className="rub">
                    <div className="card_rubrique">
                        <img src={superMario} alt="super mario" />
                    </div>
                    <div className="card_rubrique">
                        <img src={DonkeyKong} alt="donkey kong" />
                    </div>
                    <div className="card_rubrique">
                        <img src={marioKart} alt="mario kart" />
                    </div>
                    <div className="card_rubrique">
                        <img src={EarthBound} alt="earthbound" />
                    </div>
                </div>
                <div className="tendances">
                    <h2>Tendances</h2>
                    <a className="voirTout2" href="#">voir tout</a>
                </div>
                <div className="rub">
                    <div className="card_rubrique">
                        <img src={GoldenEye} alt="golden eye" />
                    </div>
                    <div className="card_rubrique">
                        <img src={Zelda} alt="zelda" />
                    </div>
                    <div className="card_rubrique">
                        <img src={Spyro} alt="spyro" />
                    </div>
                    <div className="card_rubrique">
                        <img src={Banjo} alt="banjo" />
                    </div>
                </div>
                <img className="DecoPage1" src={DecoPage1} alt="deco" />
                <div className="bestGames">
                    <img src={BestGames} alt="best games" />
                </div>
                <div className="sell">
                    <div className="button">
                        <span>Déposer mon annonce</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Rubrique