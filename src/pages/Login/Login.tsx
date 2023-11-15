import React, { FormEvent, useState } from 'react';

import './Login.scss';
import TextInput from '../../components/TextInput/TextInput';
import { getPasswordValidationError } from './Login.helpers';
import Button from '../../components/Button/Button';

export const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState('');


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const passwordError = getPasswordValidationError(password);
    setPasswordError(passwordError);

    if (passwordError) {
      // Form is not valid
      return;
    }
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
    </div>
  );
}

export default Login;
