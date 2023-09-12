import React from 'react';
import rustore from  "../../assets/rustore.svg"
import logo from "../../assets/logo.png"
import appgallery from "../../assets/ag1.png"
import "./download.css"
const Download = () => {
    return (
        <div className="container">
            <div className="download">
                <img src={logo} alt=""/>
                <h1>Скачать бесплатно</h1>
                <span>What to wear доступен бесплатно в App Gallery и RuStore.
                    Узнайте как одеться по погоде уже сегодня!
                </span>
                <a href="https://apps.rustore.ru/app/com.ggenius.wtw"><img src={rustore} alt="RuStore"/></a>
                <a href="https://appgallery.huawei.com/#/app/C107252811"><img src={appgallery} alt="App Gallery"/></a>
            </div>

        </div>
    );
};

export default Download;