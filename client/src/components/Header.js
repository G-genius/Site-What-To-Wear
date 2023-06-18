import React from 'react';
import "./header.css"
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <header>
            <div className="sidebar">
                <img src={logo} alt="logo"/>
                <ul>
                    <li>Для кого</li>
                    <li>Преимущества</li>
                    <li>Как это работает</li>
                </ul>
                <button>Устновить приложение</button>
                <span>EN</span>
            </div>
        </header>
    );
};

export default Header;