import React from 'react'

import './SelectGames.css'

//images
import decoPage2 from '../src/assets/Images/decoPage2.png'

function SelectGames() {
    return (
        <>
            <div className="RecoTitle">
                <h1 className="Title_reco">Recommandés pour vous</h1>
                <img src={decoPage2} alt="deco" />
            </div>
            <div className="rubrique">
                <div className="container">
                    <div className="card_games">
                        <img src="../src/assets/Images/superMario_reco.png" alt="super mario" />
                    </div>
                    <div className="card_games">
                        <img src="../src/assets/Images/donkeyKong_reco.png" alt="donkey kong" />
                    </div>
                </div>
                <div className="container">
                    <div className="card_games">
                        <img src="../src/assets/Images/MarioKart_reco.png" alt="mario kart" />
                    </div>
                    <div className="card_games">
                        <img src="../src/assets/Images/Metroid_reco.png" alt="metroid" />
                    </div>
                </div>
                <div className="container">
                    <div className="card_games">
                        <a href="Earthbound"><img src="../src/assets/Images/Earthbound_reco.png" alt="earthbound" /></a>
                    </div>
                    <div className="card_games">
                        <img src="../src/assets/Images/Tetris.png" alt="tetris" />
                    </div>
                </div>
                <div className="container">
                    <div className="card_games">
                        <img src="../src/assets/Images/Spyro_reco.png" alt="earthbound" />
                    </div>
                    <div className="card_games">
                        <img src="../src/assets/Images/SF.png" alt="tetris" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectGames