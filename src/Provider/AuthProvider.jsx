import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import { app } from "../Config/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // console.log(user);
  const [loading, setLoading] = useState(true);
  const googleprovider = new GoogleAuthProvider();
  const axiosPrivate = useAxiosPublic();



  // google signin
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleprovider);
  }

  /* create user */
  const createUser = (eamil, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, eamil, password)
  }

  /* sign in */
  const signIn = (eamil, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, eamil, password)
  };

  /* Sigin Out */
  const logOut = () => {
    return signOut(auth)
  };

  /* Update Pofile */
  const updateUaserPofile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })

  };




  /* User observe */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('current user', currentUser.email);
      if (currentUser) {
        const userInfo = { eamil: currentUser?.email }
        axiosPrivate.post('/api/v1/jwt', userInfo)
        .then(res =>{
          if(res.data){
            localStorage.setItem('access-token', res?.data?.token);
            setLoading(false);
          }
          
        })
      } else {
       localStorage.removeItem('access-token')
       setLoading(false);
      }
      
    });
    return () => {

      return unsubscribe();
    };
  }, [axiosPrivate]);





  const authInfo = {
    googleLogin,
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUaserPofile,




  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
