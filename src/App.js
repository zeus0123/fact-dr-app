import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { 
  ProductContainer, 
  UserContainer 
} from './containers';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={UserContainer} />
          <Route exact path="/product/:id" component={ProductContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
