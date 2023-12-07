import React from 'react';
import logo from '../../assets/barbearia-logo.png';
import lua from '../../assets/moon.png';
import sol from '../../assets/sun.png';
import './style.css';
import {useState} from "react";
import SecaoBemVindo from '../SecaoBemVindo/index.js';
import Banner from '../Banner/index.js';

export default function Topo(){
    const [ ehTemaEscuro, setEhTemaEscuro ] = useState(false);
    const alterarTema = () => {
        setEhTemaEscuro(!ehTemaEscuro);
      }
    
        
    return( 
        <div className={ehTemaEscuro ? 'modo-escuro': 'modo-claro'}>
           <div className= "cabecalho">
            <img className="logo" src = {logo} alt = "logo"/><div class = "botao-clicar" onClick = {alterarTema}><div class = "imagem-texto"><img className = "btn-icone" src = {ehTemaEscuro ? lua : sol} alt = "icone"/><span className={ehTemaEscuro ? 'dark-text' : 'light-text'}>
            {ehTemaEscuro ? 'Dark' : 'Light'}
          </span></div> </div>
          </div>
          <Banner/>
          <SecaoBemVindo temaEscuro={ehTemaEscuro} />
        </div>
    )
}
