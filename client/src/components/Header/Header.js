import React from 'react';
import "./header.css"
import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <header>
            <div className="sidebar">
                <div className="left-side">
                    <img src={logo} alt="logo"/>
                    <a href="">What to wear</a>
                </div>
                <div className="center-side">
                    <nav aria-label="Основные разделы на странице">
                        <ul>
                            <li>Для кого</li>
                            <li>Преимущества</li>
                            <li>Как это работает</li>
                        </ul>
                    </nav>
                </div>
                <div className="right-side">
                    <button>Устновить приложение</button>
                    <span>EN</span>
                </div>

            </div>
        </header>
    );
};

export default Header;