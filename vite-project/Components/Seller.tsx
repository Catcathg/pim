import React from 'react'
import './Seller.css'
import CarouselSeller from '../Components/CarouselSeller'

//images
import ProfilePicture from '../src/assets/Images/profile_image.png'
import SellerPage from '../src/assets/Images/seller_page.png'
import BoutonReturn from '../src/assets/Images/boutonReturn.png'

function Seller() {
    return (
        <>
            <div className="boutonReturnSeller"><a href="Games"><img src={BoutonReturn} alt="bouton return" /></a></div>
            <CarouselSeller/>
            <div className="seller">
                <div className="profile_seller">
                    <div className="profile_picture">
                        <img src={ProfilePicture} alt="profile picture" />
                    </div>
                    <div className="info_seller">
                        <div className="name_seller">
                            <span>Asterion64</span>
                        </div>
                        <div className="notation">
                            <span>(24)</span>
                        </div>
                    </div>
                </div>
                <div className="button_message">
                    <span>Message</span>
                </div>
            </div>
            <div className="container_seller">
                <img src={SellerPage} alt="seller page" />
            </div>
        </>
    )
}

export default Seller