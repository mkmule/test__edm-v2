interface LoginData {
  username: string;
  password: string;
}

interface LoginResponsePayload {
  type: 'viewer' | 'editor'; // as example to show forced string type, in real case I would make it as enumeration
  token: string;
}

export const postLogin = (loginData: LoginData): Promise<LoginResponsePayload> => {
  return new Promise((resolve, reject) => {
    switch (loginData.username) {
      case 'viewer':
        resolve({ type: 'viewer', token: 'this-is-success-login-token-for-viewer' });
        return;
      case 'editor':
        resolve({ type: 'editor', token: 'this-is-success-login-token-for-editor' });
        return;
      default:
        reject({ displayError: 'Wrong credentials' });
    }
  })
}