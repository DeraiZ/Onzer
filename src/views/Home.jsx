import {Outlet} from "react-router-dom";
import '../assets/css/home.css'
import React from "react";
import Header from "../layout/header";
import '../config/Api_config'

const home = () => {
    return (

        <main className={'home'}>
            <Header/>
            <article className={'navigation'}>
                <a href={'home'} className={'nav_items first_items'}>
                    <div className={'circle first'}></div>
                    <img src={'/music.png'}/>
                    <p className={'p_first'}>Musique</p>
                </a >
                <a href={'categories'} className={'nav_items second_items'}>
                    <div className={'circle second '}></div>
                    <img src={'/menu.png'}/>
                    <p className={'p_second'}>Parcourir</p>
                </a>
                <a href={'profil'} className={'nav_items third_items'}>
                    <div className={'circle third '}></div>
                    <img src={'/heart-svgrepo-com.png'}/>
                    <p className={'p_third'}>Favoris</p>
                </a>
            </article>
            <section>

            </section>
        </main>
    )
}

export default home