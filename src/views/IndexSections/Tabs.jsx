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
import Product from './Product';
// reactstrap components
import {
  Container,
  Row,
} from "reactstrap";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconTabs: 1,
      textTabs: 4
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <div className="section section-tabs">
        <Container>
          <div className="title">
            <h3 className="mb-3">Produtos em Destaque</h3>
          </div>
          <Row>
            <Product />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Tabs;
