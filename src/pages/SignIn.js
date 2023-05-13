import React, { useContext, useState } from 'react';
import {
  handleSignInWithEmail,
  handleSignUpWithEmail,
} from '../helper/api_user';
import { UserContext } from '../hooks/UserContext';
import InputText from '../components/form/InputText';

const SignIn = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useContext(UserContext);

  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const handleLogin = async (e) => {
    setError(null);
    handleSignInWithEmail(e, data, setUser, setError, setLoading);
  };

  const handleRegister = async (e) => {
    setError(null);
    handleSignUpWithEmail(e, data, setUser, setError, setLoading);
  };

  return (
    <div>
      <h2>Sign</h2>

      <form onSubmit={handleLogin}>
        <InputText
          id='login-email'
          label='E-mail'
          type='email'
          placeholder='E-mail'
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <InputText
          id='login-password'
          label='Senha'
          type='password'
          placeholder='Password'
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button type='submit'>Enviar</button>
      </form>

      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <InputText
          id='register-email'
          label='E-mail'
          type='email'
          placeholder='E-mail'
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <InputText
          id='register-username'
          label='Nome de Usuário'
          type='text'
          placeholder='Username'
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />

        <InputText
          id='register-password'
          label='Senha'
          type='password'
          placeholder='Password'
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
};

export default SignIn;
