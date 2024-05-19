import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useEffect } from "react";
function Layout({children}){
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
    },[])
    return(
        <>
            <nav className="p-2">
                <button onClick={handleSignOut} className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 hover:transition-all">Cerrar Sesión</button>

            </nav>

              <main className="">
                  {children}
              </main>
        </>
    )
}
export default Layout;