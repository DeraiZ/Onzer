import React from "react";
import {useNavigate} from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    const  navigateToConnexion = () =>{
        navigate('/connexion')
    }

    return (
        <div className={'header'}>
            <img src={'onzer.png'}/>
            <div className={'connexion'}>
                <a href={'signup'}>Inscription</a>
                <button onClick={navigateToConnexion}>Connexion</button>
            </div>
        </div>

    )
}

export default Header;