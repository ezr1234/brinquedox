import React, { Component } from 'react';
import NavBar from '../../components/Navbars/ExamplesNavbar';
import Footer from '../../components/Footer/Footer';

import {Redirect} from 'react-router-dom';

import {
    Table,
    Row,
    Container
}
from 'reactstrap';

// import { Container } from './styles';

require('../../assets/css/painel.css');

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

export default class examples extends Component {
    constructor(props){
        super(props);
        this.newProduct = this.newProduct.bind(this);
        this.state = {
            redirect:false,
            products:[]
        }
        
    }

    newProduct(){
        return <Redirect to='/painel/newproduto'/>
    }

    async componentDidMount(){
        await getProducts().then((element) => {
          const result = [];
          for(let i in element){
            var newProduct = {
              atributos:{
                nome:element[i].nome,
                marca:element[i].marca,
                valor:element[i].valor,
                categoria:element[i].categoria
              },
              key: idProduto++
            }
            result.push(newProduct);
          }
          console.log(result)
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
        <>
        <NavBar/>
        <Table className="table-painel">
            <tbody>
            <tr>
                <td onClick={()=>{window.location.href="/painel/newproduct"}} className="btn btn-info">
                    Cadastrar Produto
                </td>
                <td onClick={()=>{window.location.href="/painel/newcategoria"}} className="btn btn-info">
                    Cadastrar Categoria
                </td>
                <td onClick={()=>{window.location.href="/painel/newuser"}} className="btn btn-info">
                    Cadastrar Usuário
                </td>
            </tr>
            </tbody>
        </Table>
        <Container>
            <Row>
                    <Table>
                        <thead>
                            <tr>
                                <td>Nome</td>
                                <td>Categoria</td>
                                <td>Marca</td>
                                <td>Preço</td>
                                <td>Excluir</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.products.map((values)=>(
                                <tr key={values.key}>
                                <td>{values.atributos.nome}</td>
                                <td>{values.atributos.categoria}</td>
                                <td>{values.atributos.marca}</td>
                                <td>R$: {values.atributos.valor}</td>
                                <td>Excluir</td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>

            </Row>
        </Container>
        <Footer/>
        </>
    );
  }
}
