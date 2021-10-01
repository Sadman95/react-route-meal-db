
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Restaurants from './components/Restaurants/Restaurants';
import Home from './components/Home/Home';
import MealDetail from './components/MealDetail/MealDetail';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/restaurants">
            <Restaurants></Restaurants>
          </Route>
          <Route path="/mealdetail/:mealId">
            <MealDetail></MealDetail>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
