import React, { FormEvent, useState } from 'react';

import './Login.scss';
import TextInput from '../../components/TextInput/TextInput';
import { getPasswordValidationError } from './Login.helpers';
import Button from '../../components/Button/Button';
import { postLogin } from '../../services/login.service';

interface Props {
  handleLoginSuccess: () => void;
}

export const Login = ({ handleLoginSuccess }: Props) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const passwordError = getPasswordValidationError(password);
    setPasswordError(passwordError);

    if (passwordError) {
      // Form is not valid
      return;
    }

    // Validate login with back-end
    postLogin({ username, password })
      .then(() => {
        handleLoginSuccess();
      })
      .catch((error) => {
        setError(error.displayError);
      })
  }

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__form__inputs">
          <TextInput name="username" label="Username" placeholder="Type your cool username" value={username}
                     fullWidth handleChange={setUsername} />
          <TextInput name="password" label="Password" placeholder="Type your secret password" value={password}
                     fullWidth type="password" error={passwordError} handleChange={setPassword} />
        </div>
        <div className="login__form__actions">
          <Button type="submit" fullWidth>Login</Button>
        </div>
      </form>
      {error && <p className="login__error">{error}</p>}
    </div>
  );
}

export default Login;
