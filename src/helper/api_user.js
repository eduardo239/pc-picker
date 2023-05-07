import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updateProfile,
} from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const handleSignUpWithEmail = async (
  e,
  payload,
  setUser,
  setError,
  setLoading
) => {
  e.preventDefault();

  if (!payload) return;
  if (!payload.email) return setError('O e-mail é obrigatório.');
  if (!payload.username) return setError('O nome de usuário é obrigatório.');
  if (!payload.password) return setError('A senha é obrigatória.');
  const auth = getAuth();

  setError(null);
  try {
    setLoading(true);
    const { user } = await createUserWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    );
    setUser({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      providerId: user.providerId,
      uid: user.uid,
    });
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};

export const handleSignInWithEmail = async (
  e,
  payload,
  setUser,
  setError,
  setLoading
) => {
  e.preventDefault();

  if (!payload) return;
  if (!payload.email) return setError('O e-mail é obrigatório.');
  if (!payload.password) return setError('A senha é obrigatória.');
  const auth = getAuth();

  try {
    setLoading(true);
    const { user } = await signInWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    );
    setUser({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      providerId: user.providerId,
      uid: user.uid,
    });
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};
