import React from 'react'
import "./about.css";
import ProfileIMG from "./../../../assets/photoThay.jpg";


function Sobre() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                    jnvnsçdvnsjvnsvnsvns vnsovnnvonvsonv
                    <br /><span className='about-name'>Thaísa G. Mendes</span>
                    <br />dcnsoidndinvdinvvn

                </div>

                <div className='about-photo'>
                    <img className='picture' src={ProfileIMG} alt='Minha Foto'/>

                </div>

                <div className='about-bottom'>CONTATO</div>
            </div>
        </div>
    );
}


export default Sobre;