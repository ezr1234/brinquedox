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

let getProducts = async () =>{
  var responseJson;
  try {
    let response = await fetch('http://brinquedox.herokuapp.com/allproducts', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
  });
    responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

let idProduto = 0;

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products:[]
    };
  }
  async componentDidMount(){
    await getProducts().then((element) => {
      const result = [];
      for(let i in element){
        var newProduct = {
          atributos:{
            nome:element[i].nome,
            imagem:element[i].imagem,
            descricao:element[i].descricao,
            valor:element[i].valor,
            categoria:element[i].categoria
          },
          key: idProduto++
        }
        result.push(newProduct);
      }
      this.setState({
        products: result
      })
    })
    .catch((error) => {
      console.error('Opa! Houve um erro:', error.message);
    });

  }
  render() {
    return (
      <div className="section section-tabs">
        <Container>
          <div className="title">
            <h3 className="mb-3">Produtos em Destaque</h3>
          </div>
          <Row>
            {this.state.products.map((valores) =>{
              return <Product nome={valores.atributos.nome} 
              imagem={valores.atributos.imagem} 
              key={valores.key} 
              categoria={valores.atributos.categoria} 
              descricao={valores.atributos.descricao}
              valor={valores.atributos.valor}
              />
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Tabs;
