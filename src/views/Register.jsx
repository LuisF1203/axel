import Masonry from 'masonry-layout';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

import { useEffect } from 'react';

function Register(){
    
    const handleSignIn=(el)=>{
      el.preventDefault();
              
      let email=el.target.email.value
      let password=el.target.password.value
      let passwordConfirm=el.target.passwordConfirm.value
      if(password==passwordConfirm){
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            location.href="/"
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(error)
            // ..
          });
      }else{
        alert("verifica tu contraseña")
      }
      


    }
    return(
        <div className='relative flex w-full h-[100vh]'>
            <form className='m-auto md:w-[30%] flex flex-col space-y-4 z-10' onSubmit={handleSignIn}>
                <h1 className='text-white text-center text-2xl font-bold'>Crea tu cuenta</h1>
                <input id='email' required type="email" placeholder='email' className='p-2 border rounded' />
                <input id='password' required type="password" placeholder='password' className='p-2 border rounded' />
                <input id='passwordConfirm' required type="password" placeholder='confirm password' className='p-2 border rounded' />
                <input type="submit" className='p-2 bg-blue-500 text-white rounded cursor-pointer' />
                <a href='/login' className='text-blue-500 hover:underline text-center mt-2'>Ya tienes cuenta? (Iniciar sesion)</a>
            </form>
            
            <video className='absolute top-0 left-0 w-full h-full object-cover z-0 blur-md opacity-40' id="myVideo" autoPlay muted playsInline loop data-wf-ignore="true" data-object-fit="cover">
                <source src="./3.mp4" data-wf-ignore="true" />
            </video>
        </div>
    )
}

export default Register