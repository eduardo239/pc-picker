import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const UserContext = React.createContext();
const UserProvider = UserContext.Provider;

const ContextUser = ({ children }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isUserActive, setIsUserActive] = useState(false);

  const autoAuth = async () => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setUser({
          displayName: data.displayName,
          email: data.email,
          providerId: data.providerId,
          uid: data.uid,
          photoURL: data.photoURL,
        });
        setIsUserActive(true);
      } else console.log('not logged in');
    });
  };

  const userSignOut = async () => {
    signOut(auth)
      .then(() => {
        navigate('/books');
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setIsUserActive(false);
        setUser(null);
      });
  };

  useEffect(() => {
    if (!user) autoAuth();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserProvider
      value={{
        auth,
        setUser,
        user,

        userSignOut,
        isUserActive,
      }}
    >
      {children}
    </UserProvider>
  );
};

export { UserContext, ContextUser };
