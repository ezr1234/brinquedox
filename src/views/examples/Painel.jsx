import React, { Component } from 'react';
import NavBar from '../../components/Navbars/ExamplesNavbar';
import Footer from '../../components/Footer/Footer';

import {Redirect} from 'react-router-dom';

import {
    Table,
}
from 'reactstrap';

// import { Container } from './styles';

require('../../assets/css/painel.css');

export default class examples extends Component {
    constructor(props){
        super(props);
        this.newProduct = this.newProduct.bind(this);
        this.state = {
            redirect:false,
        }
        
    }

    newProduct(){
        return <Redirect to='/painel/newproduto'/>
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
        <Footer/>
        </>
    );
  }
}
