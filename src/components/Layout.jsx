import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
function Layout({children}){
  const [loading, setLoading]=useState(true)


    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              console.log("este es el user: ", user)
              // ...
            } else {
                
              location.href="/login"
              console.log("ningun usuario")
            }
          });

          setTimeout(() => {
            document.getElementById("loader").style.opacity="0"
            setTimeout(() => {
              setLoading(false)
            }, 1000);
          }, 1500);
    },[])
    return(
        <>
        {loading&&
          <div id="loader" style={{
            transition:"1s"
          }} className="fixed top-0 left-0 right-0 bottom-0 bg-[#9e1414ec] z-20 flex">
            <h1 className="m-auto flex text-4xl">
            <CiHeart className="m-auto animate-pulse font-bold text-white"/>
            </h1>
          </div>
        }

            <nav className="relative z-10 p-2">
                <button onClick={handleSignOut} className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 hover:transition-all">Cerrar Sesión</button>

            </nav>

              <main className="">
                  {children}
              </main>
        </>
    )
}
export default Layout;