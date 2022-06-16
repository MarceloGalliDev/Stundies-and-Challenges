import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../services/firebase";


type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined; //vindo da tipagem User
  signInWithGoogle: () => Promise<void>; //devido ao async que retorna uma promise, função sem retorno utiliza-se void
}

type AuthContextProviderProps = {
  children: ReactNode;//quando recebemos um componente React em um children é necessário usarmos o ReactNode para isso como tipagem.
}

export const AuthContext = createContext({} as AuthContextType);//info de user recebendo por contexto

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>(); //useState recebe o formato/tipo de <User>

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })
    return () => {
      unsubscribe();
    }
  }, [])//código para monitorar login feito e manter sempre as informações setadas no useState, pois não se perde quando atualizada a página.

  //authentication for google
  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth()
    const result = await signInWithPopup(auth, provider)
      if (result.user) {
        const { displayName, photoURL, uid } = result.user

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })

      }
  }
  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      { props.children }
    </AuthContext.Provider>
  )
}