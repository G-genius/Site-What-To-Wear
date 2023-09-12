import React from 'react';
import "./header.css"
import logo from "../../assets/logo.png"
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()

    const OpenDownloadPage = () => {
        navigate("/download")
    }

    return (
        <header>
            <div className="sidebar">
                <a href="/">
                    <div className="left-side">
                        <img src={logo} alt="logo"/>
                        <span className="logotext">What to wear</span>
                    </div>
                </a>
                <div className="center-side">
                    <nav aria-label="Основные разделы на странице">
                        <ul>
                            {/*<li><a href="#maininfo">Для кого</a></li>*/}
                            <li><a className="btnLi" href="#preimuchestva">Преимущества</a></li>
                            <li><a className="btnLi" href="#album">Обзор</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="right-side">
                    <button onClick={OpenDownloadPage}>Устновить приложение</button>
                    <span>RU</span>
                </div>

            </div>
        </header>
    );
};

export default Header;