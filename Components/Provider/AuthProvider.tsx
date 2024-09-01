// import { createContext, useState, useEffect, ReactNode } from 'react';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, onAuthStateChanged, User, AuthProvider as FirebaseAuthProvider } from 'firebase/auth';
// import app from './../Firebase/Firebase';



// export const AuthContext = createContext(null);

// const auth = getAuth(app);

// const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//     const [user, setUser] = useState<any>(null);
//     const [loading, setLoading] = useState<any>(true);

//     const createUser = (email: any, password: any) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
//     };

//     const signIn = (email: any, password: any) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);
//     };

//     const logOut = () => {
//         setLoading(true);
//         return signOut(auth);
//     };

//     const googleLogin = (googleProvider: any) => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider);
//     };

//     const FacebookLogin = (githubProvider: any) => {
//         setLoading(true);
//         return signInWithPopup(auth, githubProvider);
//     };

//     useEffect(() => {
//         const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//             setLoading(false);
//         });

//         return () => {
//             unSubscribe();
//         };
//     }, []);

//     const allInfo:any = {
//         createUser,
//         googleLogin,
//         FacebookLogin,
//         signIn,
//         logOut,
//         user,
//         loading,
//     };

//     return (
//         <AuthContext.Provider value={allInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;
