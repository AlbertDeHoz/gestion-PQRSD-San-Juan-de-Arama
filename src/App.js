import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Routes from './routes';
import Aplicativo from './pages/Aplicativo';

function App() {
  return (
    <div class="wrapper">
        <Switch>
          <Routes></Routes>
        </Switch>
    </div>
  );
}

export default App;
