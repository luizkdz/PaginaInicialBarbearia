import React from 'react';
import './style.css';
import ImagemBanner from '../../assets/banner-barbearia.jpg';

export default function Banner(){
    return (
        <div className = "banner-imagem">
            <img src = {ImagemBanner}/>
        </div>
    )
}