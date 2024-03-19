import { Redirect } from "react-router-dom/cjs/react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from  "react-router-dom";


function App() {
  const user = true;
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/products/:category'>
            <ProductList/>
          </Route>
          <Route path='/product/:id'>
            <SingleProduct/>
          </Route>
          <Route path='/cart'>
            <Cart/>
          </Route>
          <Route path='/login'>
            {user ? <Redirect to='/'/> : <Login/> }
          </Route>
          <Route path='/register'>
          {user ? <Redirect to='/'/> : <Register/> }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
