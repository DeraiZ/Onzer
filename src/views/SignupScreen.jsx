import React from "react";
import '../assets/css/signup.css'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../config/firebaseConfigue";
import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function SignupScreen() {

    const onSubmit = (values) => {
        const { email, password, pseudo } = values;
        createUserWithEmailAndPassword(auth, email, password, pseudo)
            .then((userCredential) => {
                // Signed in
                updateProfile(auth.currentUser, {
                    displayName: pseudo
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            // ..
        })
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            age:'',
            pseudo:'',
            identity: '',
        },
        validationSchema: Yup.object().shape({
            pseudo : Yup.string()
                .max(20, 'Must be 20 characters or less').required("Required"),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .required("Mot de passe est obligatoire")
                .min(8, "Mot de passe doit être plus grand que 8 caractères")
                .max(50, "Mot de passe doit être plus petit que 50 caractères"),
            age: Yup.number().required("Required"),
            identity: Yup.string().required("Required")
        }),
        onSubmit,
    });



    return (

        <main className={'signup'}>
            <form method="post" action="" onSubmit={formik.handleSubmit} className={'signup_container'}>
                <img src={'onzer.png'}/>
                <h1 className={'title_signup'}>Inscris-toi Gratuitement</h1>
                <div className={'link_container'}>
                    <p className={'link facebook'}><a href={'#'}>FACEBOOK</a></p>
                    <p className={'link google'}><a href={'#'}>GOOGLE</a></p>
                    <p className={'link apple'}><a href={'#'}>APPLE</a></p>
                </div>
                    <label htmlFor={'email'}>Adresse mail: </label>
                        <input  value={formik.values.email}
                                onChange={formik.handleChange} type='email' name={'email'} id={'email'}/>
                    <label htmlFor={'pseudo'} >Pseudo:</label>
                        <input value={formik.values.pseudo}
                               onChange={formik.handleChange} type='text' name={'pseudo'} id={'pseudo'}/>
                    <label htmlFor={'password'}>Mot de passe:</label>
                        <input autoComplete="false"
                               value={formik.values.password}
                               onChange={formik.handleChange} type='password' name={'password'} id={'password'}/>
                    <label htmlFor={'age'}>Age</label>
                        <input value={formik.values.age}
                               onChange={formik.handleChange} type='number' name={'age'} id={'age'}/>
                    <label htmlFor={'identity'}>Identité:</label>
                        <select value={formik.values.identity}
                                onChange={formik.handleChange} name={'identity'} id={'identity'}>
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