import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import { PaginaPost } from './components/pages/PaginaPost/PaginaPost';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <PaginaPrincipal></PaginaPrincipal>
      </Route>
      <Route path="/post">
        <PaginaPost></PaginaPost>
      </Route>
    </BrowserRouter>
      
  );
}

export default App;
