import { Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import { PaginaPost } from './components/pages/PaginaPost/PaginaPost';
import { PaginaCadastro } from './components/pages/Cadastro/Cadastro';
import { PaginaLogin } from './components/pages/Login/Login';
import { createContext, useState } from 'react';
import history from './history';

export const AuthContext = createContext(null);

function App() {
  const [auth, setAuth] = useState({ token: localStorage.getItem("token"), nome: localStorage.getItem("nome") })

  const setAuthLS = (newAuth) => {
    setAuth(newAuth)
    localStorage.setItem("token", newAuth.token)
    localStorage.setItem("nome", newAuth.nome)
  }

  return (
    <AuthContext.Provider value={{ auth: auth, setAuth: setAuthLS }}>
      <Router history={history}>
        <Route exact path="/">
          {
            auth.token === "null" ||
            auth.token == null ?
              <Redirect to="/login"></Redirect> :
              <PaginaPrincipal></PaginaPrincipal>
          }
        </Route>
        <Route exact path="/post">
          <PaginaPost></PaginaPost>
        </Route>
        <Route exact path="/cadastro">
          <PaginaCadastro></PaginaCadastro>
        </Route>
        <Route exact path="/login" component={PaginaLogin}>
        </Route>
      </Router>
    </AuthContext.Provider>  
  );
}

export default App;