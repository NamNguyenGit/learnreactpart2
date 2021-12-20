import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import productApi from './api/productApi';
import './App.css';
import NotFound from './Components/NotFound';
import Footer from './Features/Header-Footer/Footer';
import Header from './Features/Header-Footer/Header';
import ProductFeatures from './Features/Product';
import TodoFeatures from './Features/Todo';

function App() {
  useEffect(() => {
    const params = {
      id:  13761499,
    };
    const fetchProduct = async () => {
      const productlist = await productApi.getAll(params);
      console.log(productlist);
    };

    fetchProduct();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Redirect from="/home" to="/" exact></Redirect>
        <Route path="/" exact>
          Home Page
        </Route>
        <Route path="/todos" component={TodoFeatures}></Route>
        <Route path="/products" component={ProductFeatures}></Route>

        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
