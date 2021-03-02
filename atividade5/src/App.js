import { BrowserRouter, Router, Route } from 'react-router-dom';
import './App.css';
import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import { PaginaPost } from './components/pages/PaginaPost/PaginaPost';
import history from './history';

function App() {
  return (
    <Router history={history}>
      <Route exact path="/">
        <PaginaPrincipal></PaginaPrincipal>
      </Route>
      <Route path="/post">
        <PaginaPost></PaginaPost>
      </Route>
    </Router>
      
  );
}

export default App;
