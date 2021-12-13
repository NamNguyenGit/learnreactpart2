import { Redirect, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import NotFound from "./Components/NotFound";
import Footer from "./Features/Header-Footer/Footer";
import Header from "./Features/Header-Footer/Header";
import ProductFeatures from "./Features/Product";
import TodoFeatures from "./Features/Todo";

function App() {
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
