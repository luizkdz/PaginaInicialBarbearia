import React from 'react';
import './style.css';
import imagemAssinatura from '../../assets/assinatura.png';

export default function SecaoBemVindo(){
    return(
        <div className="descricao-secao-bem-vindo">
            <h1>Bem vindo a Barber Shop</h1>
            <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas<br/>
            maiores expectativas.</p>
            <p>Nossos serviços são dedicados ao seu sucesso pessoal.Aqui temos uma equipe premaida que demonstrou o talento de<br/>
            mestres barbeiros em vários concursos de estilo.Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará<br/>
            desapontado.</p>
            <img src = {imagemAssinatura}/>
        </div>
    )
}
    