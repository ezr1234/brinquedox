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
    const {nome,imagem, categoria,descricao,valor} = this.props;
    return(
      <Col className="ml-auto mr-auto" md="10" xl="6">
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  {categoria}
                </small>
              </div>
              <Card>
                <CardHeader>
                  <div className="tabsCardTitle">
                      <Row>
                      <h3>{nome}</h3>
                      <button type="button" className="btn-icon btn-round btn btn-success iconButton">        
                        <i className="tim-icons icon-basket-simple iconProduct"/>
                      </button>
                      </Row>
                  </div>
                </CardHeader>
                <CardBody className="tabsProductDescription">
                  <img src={imagem} alt="Teste"></img>
                      <p>
                        {descricao}
                      </p>
                      <h4>R$: {valor}</h4>
                </CardBody>
              </Card>
            </Col>
    );
  }
}
