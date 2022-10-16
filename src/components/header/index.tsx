import React from 'react';
import './style.scss';
import headerCat from "../../assets/header-cat.png";

function Header() {
    return (
        <header className="header">
            <div className='header__wrap'>
                <div className='header__logo-wrap'>
                    <img className='header__logo' src={headerCat} alt={'logo'}/>
                    <div className='header__title'>TESTTASK</div>
                </div>
                <div className='header__wrap-button'>
                   <button className='header__button'>Users</button>
                   <button className='header__button'>Sign up</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
