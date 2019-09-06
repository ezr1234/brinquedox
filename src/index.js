/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";

import Index from "views/Index.jsx";
import LandingPage from "views/examples/LandingPage.jsx";
import RegisterPage from "views/examples/RegisterPage.jsx";
import ProfilePage from "views/examples/ProfilePage.jsx";
import Login from "./views/examples/Login.jsx";
import NewUser from './views/examples/NewUser.jsx';
import NewProduct from './views/examples/NewProduct.jsx';
import NewCategoria from './views/examples/NewCategoria.jsx';
import NewFornecedor from './views/examples/NewFornecedor.jsx'
import Painel from "./views/examples/Painel";
import Cadastrar from './views/examples/Cadastrar.jsx';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={props => <Index {...props} />} />
      
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/entrar"
        render={props => <Login {...props} />}
      />
      <Route
        path="/cadastrar"
        render={props => <Cadastrar {...props} />}
      />
      <Route
        path="/painel/newuser"
        exact
        render={props => <NewUser {...props} />}
      />
      <Route
        path="/painel/newproduct"
        exact
        render={props => <NewProduct {...props} />}
      />
      <Route
        path="/painel/newcategoria"
        exact
        render={props => <NewCategoria {...props} />}
      />
      <Route
        path="/painel/newforncededor"
        exact
        render={props => <NewFornecedor {...props} />}
      />
      <Route
        path="/painel"
        exact
        render={props => <Painel {...props} />}
      />
      <Route
        path="/"
        render={props => <LandingPage {...props} />}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
