import React from 'react';
import phone1 from "../../assets/Рисунок1.png"
import "./maininfo.css"
import rustore from  "../../assets/rustore.svg"
import nashstore from "../../assets/nashstore.jpg"
import Album from "../Album/Album";
import Rewiews from "../Rewiews/Rewiews";
const MainInfo = () => {
    return (
        <div className="container">
            <div className="main-info">
                <div className="left-block">
                    <h2>Получите максимум от погоды</h2>
                    <h1>What to wear - отечественное погодное мобильное приложение с алгоритмом подбора одежды</h1>
                    <a href="https://apps.rustore.ru/app/com.ggenius.wtw"><img src={rustore} alt="RuStore"/></a>

                </div>
                <div>
                    <img className="lbimg" src={phone1} alt=""/>
                </div>
            </div>
            <div className="container px-4 py-5" id="preimuchestva">
                <h2 className="pb-2 border-bottom">Преимущества</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                    <div className="col d-flex align-items-start">
                        <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em">
                        </svg>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Уникальность</h3>
                            <p>Приложение What to wear не имеет аналогов в России.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em">

                        </svg>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Многоязычность</h3>
                            <p>Приложение переведено на 10 самых популярных языков мира!</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em">

                        </svg>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Данные о погоде в реальном времени</h3>
                            <p>Получайте информацию о погоде с помощью геолокации.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em">

                        </svg>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Разнообразие одежды</h3>
                            <p>Присутствует две категории одежды по полу (мужская и женская).</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em">

                        </svg>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Погода на несколько дней</h3>
                            <p>Получайте информацию о погоде на 3 дня вперед.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em">

                        </svg>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Кастомизация тем приложения</h3>
                            <p>Перейди на светлую или темную тему.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em">

                        </svg>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Единицы измерения температуры</h3>
                            <p>Возможность выбора единиц измерения температуры по градусам Цельсия и Фаренгейта.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em">

                        </svg>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Детальная информация о погоде</h3>
                            <p>Текущая погода, осадки, сила ветра, облачность, влажность.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Album/>
        </div>
    );
};

export default MainInfo;