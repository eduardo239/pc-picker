import { useContext, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { UserContext } from '../hooks/UserContext';
import MainMenu from '../components/MainMenu';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AddParts from './AddParts';
import AllParts from './AllParts';
import PartById from './PartById';
import SignIn from './SignIn';
import NotFound from './NotFound';

const App = () => {
  const { user, setUser } = useContext(UserContext);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // eslint-disable-next-line
        const uid = user.uid;
        setUser({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          providerId: user.providerId,
          uid: user.uid,
        });
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth, setUser]);

  return (
    <div>
      <MainMenu />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/add' element={<AddParts />} />
        <Route exact path='/parts' element={<AllParts />} />
        <Route exact path='/part' element={<PartById />} />

        <Route exact path='/sign' element={<SignIn />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default App;
