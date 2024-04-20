import React from 'react'
import './Synopsis.css'
import CarouselSynopsis from '../Components/CarouselSynopsis'

//images
import EarthboundCard from '../src/assets/Images/earthbound_card.png'
import post1 from '../src/assets/Images/post1.png'
import post2 from '../src/assets/Images/post2.png'
import post3 from '../src/assets/Images/post3.png'
import badges from '../src/assets/Images/badges.png'
import Deco1 from '../src/assets/Images/decoPage3_n1.png'
import Deco2 from '../src/assets/Images/decoPage3_n2.png'
import rectangle from '../src/assets/Images/rectangle.png'
import BoutonReturn from '../src/assets/Images/boutonReturn.png'

function Earthbound() {
  return (
    <>
      <div className="boutonReturn"><a href="Games"><img src={BoutonReturn} alt="bouton return" /></a></div>
      <div className="deco1">
        <img src={Deco1} alt="deco" />
      </div>
      <div className="container_game">
        <div className="sectionEarthbound">
          <div className="EarthImage">
            <img src={EarthboundCard} alt="earthbound card" />
          </div>
          <div className="description">
            <div className="title">Earthbound</div>
            <div className="date">Nintendo - 1995</div>
            <div classname="text1">
              <span>
                Dans "Earthbound", le joueur suit l'incroyable voyage de Ness, un  jeune garçon ac-compagné de ses amis, Paula, Jeff et Poo, alors qu'ils
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="text">
        <span>s'aventurent à travers un monde fantastique et contemporain pour contrer une invasion extraterrestre menée par l'énigmatique Giygas. Ce RPG emblématique de la Super Nintendo se distingue par son humour satirique, ses person-nages mémorables et son univers coloré.
        </span>
      </div>
      <div className="deco2">
        <img src={Deco2} alt="deco" />
      </div>
      <div className="badges">
        <img src={badges} alt="badges" />
      </div>
      <CarouselSynopsis />
      <div className="Annonces">Annonces</div>
      <img className="Rectangle" src={rectangle} alt="rectangle deco" />
      <div className="post">
        <div className="container_post"><img src={post1} alt="post 1" /></div>
        <div className="container_post"><img src={post2} alt="post 2" /></div>
        <div className="container_post"><a href="Announces"><img src={post3} alt="post 3" /></a>
        </div>
      </div>


    </>
  )
}

export default Earthbound