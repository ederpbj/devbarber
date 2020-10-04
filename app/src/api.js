const BASE_API = 'https://api.b7web.com.br/devbarber/api';

export default {
   checkToken: async() => {},
   // metodo fetch
   // pode usar axios para facilitar
   signIn: async(email, password) => {
      const req = await fetch(`${BASE_API}/auth/login`, {
         method: 'POST',
         header: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({email, password})
      });
      // gera json
      const json = await req.json();
      return json;
   },
   signUp: async() => {}
}