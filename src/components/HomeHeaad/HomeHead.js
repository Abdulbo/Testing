import React from 'react';
import"./HomeHead.scss";

const HomeHead = () => {
    return (
        <div className="headWrapper">
            <ul className="headWrapper__list">
                <li className="headWrapper__item">
                    <h3 className="headWrapper__item__title">PayFly Design</h3>
                    <span className="headWrapper__item__span">
                        <p className="headWrapper__item__text1">Раздел:</p>
                        <p  className="headWrapper__item__text2">Дизайн</p>
                    </span>
                    <span  className="headWrapper__item__span-data">
                        <p className="headWrapper__item__text1-data">Дата создания:</p>
                        <p className="headWrapper__item__text2-data">10.10.2020</p>
                    </span>
                    <button className="item__btn">Открыть</button>
                </li>
                <li className="headWrapper__item">
                    <h3 className="headWrapper__item__title">PayFly Design</h3>
                    <span className="headWrapper__item__span">
                        <p className="headWrapper__item__text1">Раздел:</p>
                        <p  className="headWrapper__item__text2">Дизайн</p>
                    </span>
                    <span  className="headWrapper__item__span-data">
                        <p className="headWrapper__item__text1-data">Дата создания:</p>
                        <p className="headWrapper__item__text2-data">10.10.2020</p>
                    </span>
                    <button className="item__btn">Открыть</button>
                </li>
                <li className="headWrapper__item">
                    <h3 className="headWrapper__item__title">abquick Продажа</h3>
                    <span className="headWrapper__item__span">
                        <p className="headWrapper__item__text1">Раздел:</p>
                        <p  className="headWrapper__item__text2">Дизайн</p>
                    </span>
                    <span  className="headWrapper__item__span-data">
                        <p className="headWrapper__item__text1-data">Дата создания:</p>
                        <p className="headWrapper__item__text2-data">10.10.2020</p>
                    </span>
                    <button className="item__btn">Открыть</button>
                </li>
                <li className="headWrapper__item">
                 <h3>Создать доску</h3>
                </li>
            </ul>
        </div>
    );
};



export default HomeHead;