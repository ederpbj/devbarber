const BASE_API = 'https://api.b7web.com.br/devbarber/api';

export default {
  // metodo fetch
  // pode usar axios para facilitar
  checkToken: async (token) => {
    const req = await fetch(`${BASE_API}/refresh`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      // manda novo token
      body: JSON.stringify({ token }),
    });
    // gera json
    const json = await req.json();
    return json;
  },

  signIn: async (email, password) => {
    // console.log("URL", `${BASE_API}/auth/login`);
    // console.log("BODY", JSON.stringify({email, password}));

    // Verificar se esta recebendo certo as informações
    // console.log("email", email)
    // console.log("password", password)

    const req = await fetch(`${BASE_API}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    // gera json
    const json = await req.json();
    return json;
  },
  signUp: async (name, email, password) => {
    const req = await fetch(`${BASE_API}/user`, {
      method: 'POST',
      headers: {
      Accept: 
      'application/json', 
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await req.json();
    return json;
  },
};