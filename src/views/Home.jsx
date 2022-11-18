import {Outlet} from "react-router-dom";
import '../assets/css/home.css'
import React, {useEffect} from "react";
import Header from "../layout/header";
import '../config/Api_config'
import getApiToken from "../config/Api_config";

export default function Home(){
    function search(type, query, token){
        return fetch(`https://api.spotify.com/v1/search?type=${type}&q=${query}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
            .then(res => res.json());
    }

    useEffect(() => {
        getApiToken()
            .then(accessToken => {
                search('album', 'imagine dragons', accessToken)
                    .then(res => {
                        console.log(res);
                    })
                    .catch(error => console.error(error));
            })
    }, []);

    function playlist(query, token){
        return fetch(`https://api.spotify.com/v1/playlists/q=${query}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
            .then(res => res.json());
    }

    useEffect(() => {
        getApiToken()
            .then(accessToken => {
                playlist('37i9dQZF1DWXRqgorJj26U', accessToken)
                    .then(res => {
                        console.log(res);
                    })
                    .catch(error => console.error(error));
            })
    }, []);

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