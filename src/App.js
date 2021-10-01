
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Restaurants from './components/Restaurants/Restaurants';
import Home from './components/Home/Home';
import MealDetail from './components/MealDetail/MealDetail';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
        <Header></Header>
            <Home></Home>
          </Route>
          <Route path="/restaurants">
          <Header></Header>
            <Restaurants></Restaurants>
          </Route>
          <Route path="/mealdetail/:mealId">
          <Header></Header>
            <MealDetail></MealDetail>
          </Route>
          <Route path="/login">
          <Header></Header>
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
