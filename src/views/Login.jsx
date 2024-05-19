import Masonry from 'masonry-layout';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useEffect } from 'react';

function Login(){
    const handleLogIn=(el)=>{
        el.preventDefault()
        
        let email=el.target.email.value
        let password=el.target.password.value

        console.log(email)
        console.log(password)

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            location.href="/"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("credenciales incorrectas")
        });

    }

    return(
        <div className='relative flex w-full h-[100vh]'>
            
            <form className='m-auto md:w-[30%] flex flex-col space-y-4 z-10' onSubmit={handleLogIn}>
                <h1 className='text-white text-center text-2xl font-bold'>Iniciar Sesión</h1>
                <input required id='email' type="email" placeholder='email' className='p-2 border rounded' />
                <input required id='password' type="password" placeholder='password' className='p-2 border rounded' />
                <input type="submit" className='p-2 bg-blue-500 text-white rounded cursor-pointer' />
                <a href='/register' className='text-blue-500 hover:underline text-center mt-2'>No tienes cuenta? (Crear cuenta)</a>
            </form>

            <video className='absolute top-0 left-0 w-full h-full object-cover z-0 blur-md opacity-40' id="myVideo" autoPlay muted playsInline loop data-wf-ignore="true" data-object-fit="cover">
                <source src="./3.mp4" data-wf-ignore="true" />
            </video>
        </div>
    )
}

export default Login