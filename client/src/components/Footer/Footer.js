import React from 'react';
import "./footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Домой</a></li>
                        <li className="nav-item"><a href="#preimuchestva" className="nav-link px-2 text-body-secondary">Преимущества</a>
                        </li>
                        <li className="nav-item"><a href="/download" className="nav-link px-2 text-body-secondary">Скачать</a>
                        </li>
                        <li className="nav-item"><a href="#album" className="nav-link px-2 text-body-secondary">Обзор</a>
                        </li>
                        <li className="nav-item"><a href="/privacy" className="nav-link px-2 text-body-secondary">Политика конфиденциальности</a>
                        </li>
                        <li className="nav-item"><a href="/terms" className="nav-link px-2 text-body-secondary">Условия и положения</a>
                        </li>
                    </ul>
                    <p className="text-center text-body-secondary">© 2023 Ggenius, Inc</p>
                </footer>
            </div>
        </div>
    );
};

export default Footer;