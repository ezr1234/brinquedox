import React, { Component } from 'react';
import {
  Row,
  CardBody,
  Col,
  Card,
  CardHeader
} from "reactstrap";

export default class Product extends Component {
  render() {
    return(
      <Col className="ml-auto mr-auto" md="10" xl="6">
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  CATEGORIA
                </small>
              </div>
              <Card>
                <CardHeader>
                  <div className="tabsCardTitle">
                      <Row>
                      <h3>Varinha Dumbledore</h3>
                      <button type="button" className="btn-icon btn-round btn btn-success iconButton">        
                        <i className="tim-icons icon-basket-simple iconProduct"/>
                      </button>
                      </Row>
                  </div>
                </CardHeader>
                <CardBody className="tabsProductDescription">
                  <img src="https://cdn.discordapp.com/attachments/540284091162034176/602977204917501952/unknown.png" alt="Teste"></img>
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits. <br />
                        <br />
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI.
                      </p>
                      <h4>R$55,00</h4>
                </CardBody>
              </Card>
            </Col>
    );
  }
}
