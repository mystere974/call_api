import { Switch, Route } from 'react-router';
import GameDetails from './components/GameDetails';
import Header from './components/Header';


import './App.css';
import GameList from './components/GameList';

function App() {
  return (
    <div>
      <Header name="react game"/>
      <GameList />
      <Switch>
        <Route exact path="/" component={GameList} />
        <Route path="/games/:id">
          <GameDetails />
        </Route>
      </Switch>
  
    </div>
  );
}

export default App;
