import React, { Component } from 'react';
import NavBar from '../../components/Navbars/ExamplesNavbar';
import Footer from '../../components/Footer/Footer';

import {Redirect} from 'react-router-dom';

import {
    Table,
    Col,
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

let getCategorias = async () =>{
  var responseJson;
  try {
    let response = await fetch('http://brinquedox.herokuapp.com/getcategoria', {
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

let getFornecedores = async () =>{
  var responseJson;
  try {
    let response = await fetch('http://brinquedox.herokuapp.com/getfornecedores', {
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

let getUsuarios = async () =>{
  var responseJson;
  try {
    let response = await fetch('http://brinquedox.herokuapp.com/getusers', {
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

  let idProduto = 0,
   idCategoria = 0,
   idFornecedor = 0,
   idUsuario = 0;
  

export default class examples extends Component {
    constructor(props){
        super(props);
        this.newProduct = this.newProduct.bind(this);
        this.state = {
            redirect:false,
            products:[],
            categorias:[],
            fornecedores:[],
            usuarios:[]
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
          this.setState({
            products: result
          })
        })
        .catch((error) => {
          console.error('Opa! Houve um erro:', error.message);
        });
        await getCategorias().then((element) => {
          const result = [];
          for(let i in element){
            var newCategoria = {
              atributos:{
                categoria:element[i].categoria
              },
              key: idCategoria++
            }
            result.push(newCategoria);
          }
          this.setState({
            categorias: result
          })
        })
        .catch((error) => {
          console.error('Opa! Houve um erro:', error.message);
        });
        
        await getFornecedores().then((element) => {
          const result = [];
          for(let i in element){
            var newFornecedor = {
              atributos:{
                nome:element[i].nome,
                cnpj:element[i].cnpj,
                uf:element[i].uf
              },
              key: idFornecedor++
            }
            result.push(newFornecedor);
          }
          this.setState({
            fornecedores: result
          })
        })
        .catch((error) => {
          console.error('Opa! Houve um erro:', error.message);
        });
        await getUsuarios().then((element) => {
          const result = [];
          for(let i in element){
            var newUsuario = {
              atributos:{
                nome:element[i].nome,
                email:element[i].email,
              },
              key: idUsuario++
            }
            result.push(newUsuario);
          }
          this.setState({
            usuarios: result
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
                <td onClick={()=>{window.location.href="/painel/newforncededor"}} className="btn btn-info">
                    Cadastrar Fornecedor
                </td>
            </tr>
            </tbody>
        </Table>
        <Container>
          <Row>
            <Col>
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

            </Col>
            <Col>
              <Table>
                        <thead>
                            <tr>
                                <td>Categoria</td>
                                <td>Excluir</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.categorias.map((values)=>(
                                <tr key={values.key}>
                                <td>{values.atributos.categoria}</td>
                                <td>Excluir</td>
                            </tr>
                            ))}
                        </tbody>
                </Table>
            </Col>
          </Row>
          <Row>
            <Col>
            <Table>
                        <thead>
                            <tr>
                                <td>Fornecedor</td>
                                <td>CNPJ</td>
                                <td>UF</td>
                                <td>Excluir</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.fornecedores.map((values)=>(
                                <tr key={values.key}>
                                <td>{values.atributos.nome}</td>
                                <td>{values.atributos.cnpj}</td>
                                <td>{values.atributos.uf}</td>
                                <td>Excluir</td>
                            </tr>
                            ))}
                        </tbody>
                </Table>
            </Col>
            <Col>
            <Table>
                        <thead>
                            <tr>
                                <td>Usuário</td>
                                <td>Email</td>
                                <td>Excluir</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.usuarios.map((values)=>(
                                <tr key={values.key}>
                                <td>{values.atributos.nome}</td>
                                <td>{values.atributos.email}</td>
                                <td>Excluir</td>
                            </tr>
                            ))}
                        </tbody>
                </Table>
            </Col>
          </Row>
        </Container>
        <Footer/>
        </>
    );
  }
}
