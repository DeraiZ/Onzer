import {Outlet} from "react-router-dom";
import '../assets/css/home.css'
import React, {useEffect, useState} from "react";
import Header from "../layout/header";
import '../config/Api_config'
import getApiToken from "../config/Api_config";
import Nav from "../layout/Nav";
import { onAuthStateChanged,  } from "firebase/auth";
import {auth} from '../config/firebaseConfigue'

export default function Home() {
    function search(type, query, token) {
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

    function playlistImg(query, token) {
        return fetch(`https://api.spotify.com/v1/playlists/${query}/images`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
            .then(res => res.json());
    }

    const [img, setImg] = useState();
    useEffect(() => {
        getApiToken()
            .then(accessToken => {
                playlistImg('37i9dQZF1DWXRqgorJj26U', accessToken)
                    .then(res => {
                        const imgUrl = res[0].url;
                        console.log(imgUrl);
                        setImg(imgUrl);
                    })
                    .catch(error => console.error(error));
            })
    }, []);

    function playlist(query, token) {
        return fetch(`https://api.spotify.com/v1/users/${query}/playlists`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
            .then(res => res.json());
    }

    const [item, setItem] = useState();
    function PlaylistItems() {
        useEffect(() => {
            getApiToken()
                .then(accessToken => {
                    playlist('Spotify', accessToken)
                        .then(res => {
                            const itemsArray = res.items;
                            console.log(itemsArray)
                            let i = 0
                            const itemArray = itemsArray.map((data) => {
                                console.log(data.external_urls.spotify)
                                return(
                                        <article key={data.id} id={`item${i+=1}`} className='playlist' >
                                            <a href={data.external_urls.spotify}><img src={data.images[0].url}/></a>

                                        </article>
                                    )
                                }
                            )
                            setItem(itemArray)
                        })
                        .catch(error => console.error(error));
                })
        }, []);
    }

    PlaylistItems();

    return (

        <main className={'home'}>
            <Header/>
            <div className={'body'}>
                <Nav />
                <section>
                    <div className={'itemsList'}>
                        {item}
                    </div>

                </section>
            </div>
        </main>
    )
}