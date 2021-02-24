import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import { PaginaPosts } from './components/pages/PaginaPosts/PaginaPosts';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <PaginaPrincipal></PaginaPrincipal>
      </Route>
      <Route path="/posts">
        <PaginaPosts></PaginaPosts>
      </Route>
    </BrowserRouter>
      
  );
}

export default App;
