import React from 'react';
import "./Home.scss"

//components
import HomeHead from '../components/HomeHeaad/HomeHead';

//imgs
import setingImg from "../img/Vector7.png";
import callImg from "../img/Vector8.png";
import userImg from "../img/Vector9.png";
import { useContext } from 'react';
import { Modalpro } from '../context/ModalProvider';
import Modal from '../components/Modal/Modal';


const Home = () => {
    const {value} = useContext(Modalpro);
    const {setValue} = useContext(Modalpro);
    
    const openModal = () =>{
       setValue(prev => !prev)
    }   
    return (
        <div className="container-home">
           <header className="header">
                <ul className="header__wrapper-list">
                    <li className="wrapper-list__item-img">
                        <img className="wrapper-img__img" src={setingImg} alt="img" />
                    </li>
                    <li className="wrapper-list__item-img">
                        <img className="wrapper-img__img" src={callImg} alt="img" />
                    </li>
                    <li className="wrapper-list__item-img"
                    onClick={openModal}
                    >
                        <img className="wrapper-img__img" src={userImg} alt="img" />
                    </li>
                </ul>
           </header>
           <HomeHead />
           <Modal value={value}/>
        </div>
    );
};



export default Home;