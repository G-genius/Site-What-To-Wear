import React from 'react';
import rustore from  "../../assets/rustore.svg"
import logo from "../../assets/logo.png"
import "./download.css"
const Download = () => {
    return (
        <div className="container">
            <div className="download">
                <img src={logo} alt=""/>
                <h1>Скачать бесплатно</h1>
                <span>What to wear доступен бесплатно в RuStore.
                    Узнайте как одеться по погоде уже сегодня!
                </span>
                <a href="https://apps.rustore.ru/app/com.ggenius.wtw"><img src={rustore} alt=""/></a>
            </div>

        </div>
    );
};

export default Download;