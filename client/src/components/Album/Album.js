import React from 'react';
import img1 from "../../assets/ris.png"
import img2 from "../../assets/Рисунок2.png"
import img3 from "../../assets/Рисунок3.png"
import img4 from "../../assets/Рисунок4.png"
import img5 from "../../assets/Рисунок5.png"
import img6 from "../../assets/ris2.png"
const Album = () => {
    return (
        <div className="container">
            <div className="album py-5 bg-body-tertiary border-3" id="album">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card shadow-sm">
                                <img src={img1} alt="" className="bd-placeholder-img card-img-top"/>
                                <div className="card-body">
                                    <p className="card-text">Главная страница с информацией о погоде, а также с блоком подбором одежды.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img src={img2} alt="" className="bd-placeholder-img card-img-top"/>
                                <div className="card-body">
                                    <p className="card-text">Детальная информация о погоде на несколько дней.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img src={img3} alt="" className="bd-placeholder-img card-img-top"/>
                                <div className="card-body">
                                    <p className="card-text">Разнообразие мужских и женских категорий одежды.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img src={img4} alt="" className="bd-placeholder-img card-img-top"/>
                                <div className="card-body">
                                    <p className="card-text">Разнообразный набор видов одежды по категориям.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img src={img5} alt="" className="bd-placeholder-img card-img-top"/>
                                <div className="card-body">
                                    <p className="card-text">Получение одежды по геолокации или возможность ввести город вручную.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img src={img6} alt="" className="bd-placeholder-img card-img-top"/>
                                <div className="card-body">
                                    <p className="card-text">Возможность выбора единицы измерения температуры.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Album;