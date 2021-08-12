import './App.css';
import { Switch } from 'react-router-dom';
import Routes from './routes';

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
