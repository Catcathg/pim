import React from 'react'
import '';

//images
import menu from '../src/assets/Images/menu.svg';
import logo from '../src/assets/Images/logo.svg';
import community from '../src/assets/Images/commu.svg';
import message from '../src/assets/Images/message.svg';
import profile from '../src/assets/Images/profile.svg';
import SearchBar from './SearchBar';

function Header() {
    return (
        <>
            <div className="nav">
                <div className="icon_menu">
                    <img src={menu} alt="icon menu" />
                </div>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="account">
                    <div className="community"><img src={community} alt="icon community" /></div>
                    <div className="icon_message"><img src={message} alt="icon message" /></div>
                    <div className="profile"><img src={profile} alt="icon profile" /></div>
                </div>
            </div>
        </>
    )
}

export default Header