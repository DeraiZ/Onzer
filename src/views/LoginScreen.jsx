import React from "react";
import '../assets/css/login.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../config/firebaseConfigue";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useNavigate} from "react-router-dom";

const LoginScreen = () => {

    const navigate = useNavigate();

    const onSubmit = (values) => {
        const { email, password } = values;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user)
                navigate('/')
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
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .required("Mot de passe est obligatoire")
                .min(8, "Mot de passe doit être plus grand que 8 caractères")
                .max(50, "Mot de passe doit être plus petit que 50 caractères"),
        }),
        onSubmit,
    });

    console.log(formik)
    return (
        <main className={'signup'}>
            <form method={'post'} action="" onSubmit={formik.handleSubmit} className={'signup_container'}>
                <img src={'onzer.png'}/>
                <h1 className={'title_signup'}>Inscris-toi Gratuitement</h1>
                <div className={'link_container'}>
                    <p className={'link facebook'}><a href={'#'}>FACEBOOK</a></p>
                    <p className={'link google'}><a href={'#'}>GOOGLE</a></p>
                    <p className={'link apple'}><a href={'#'}>APPLE</a></p>
                </div>
                <label htmlFor={'email'}>Adresse mail: </label>
                <input value={formik.values.email}
                       onChange={formik.handleChange} type='email' name={'email'} id={'login_email'}/>
                <label htmlFor={'password'}>Mot de passe:</label>
                <input value={formik.values.password}
                       onChange={formik.handleChange} type='password' name={'password'} id={'login_password'}/>
                <button className={'connect'}>Se connecter</button>
                <p className={'mdp_forget'}>Mot de passe oublier?</p>
                <p className={'cgu'}>Ce site est protégé par reCAPTCHA. Les Règles de confidentialité et Conditions d'utilisation de Google s'appliquent. </p>

            </form>
        </main>
    )
}

export default LoginScreen