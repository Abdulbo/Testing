import React from 'react';
import "./Modal.scss";


const Modal = ({value}) => {
    return (
        <div>
           { value &&  
           
           <div className="wrapper-curtain">
                <div className="wrapper-form">
                    <h3>Новая доска </h3>
                    <form className="wrapper-form__form">
                        <label>Название</label>
                        <input className="form__input-name" placeholder="Sunrise Tour Inc" />
                        <label>Раздел</label>
                        <select className="form__select">
                            <option>Placeholder</option>
                            <option>Placeholder</option>
                            <option>Placeholder</option>
                        </select>
                            <button className="form__btn-create">Создать</button>
                            <button className="form__btn-canceled">Отмена</button>
                    </form>
                </div>
            </div>}
        </div>
    );
};


export default Modal;