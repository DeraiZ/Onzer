import React from "react";
import '../assets/css/signup.css'
const SignupScreen = () => {




    return (

        <main className={'signup'}>
            <form action="" className={'signup_container'}>
                <img src={'onzer.png'}/>
                <h1 className={'title_signup'}>Inscris-toi Gratuitement</h1>
                <div className={'link_container'}>
                    <p className={'link facebook'}><a href={'#'}>FACEBOOK</a></p>
                    <p className={'link google'}><a href={'#'}>GOOGLE</a></p>
                    <p className={'link apple'}><a href={'#'}>APPLE</a></p>
                </div>
                    <label for={'email'}>Adresse mail: </label>
                        <input type='email' name={'email'} id={'email'}/>
                    <label for={'pseudo'} >Pseudo:</label>
                        <input type='text' name={'paseudo'} id={'pseudo'}/>
                    <label htmlFor={'password'}>Mot de passe:</label>
                        <input type='password' name={'password'} id={'password'}/>
                    <label htmlFor={'age'}>Age</label>
                        <input type='number' name={'age'} id={'age'}/>
                    <label htmlFor={'identité'}>Identité:</label>
                        <select name={'identité'} id={'identité'}>
                            <option>Identité</option>
                            <option>Homme</option>
                            <option>Femme</option>
                            <option>Autres</option>
                        </select>

                <p className={'cgu'}>En cliquant sur "Inscription", tu acceptes les Conditions générales d'utilisation et la Politique de protection des données</p>
                <button>S'inscrire</button>
            </form>
        </main>
    )
}

export default SignupScreen