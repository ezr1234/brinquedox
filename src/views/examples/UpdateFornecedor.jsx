import React, { Component } from 'react';
import {
  Form,
  Input,
  Container,
} from "reactstrap";

import NavBar from '../../components/Navbars/ExamplesNavbar'
import Footer from '../../components/Footer/Footer'

// import { Container } from './styles';

require('../../assets/css/painel.css');

export default class newUser extends Component {

  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
        nome:'',
        cnpj:'',
        newnome:'',
        newuf:''
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };

  handleSubmit(event) {
    try {
      let response = fetch('http://brinquedox.herokuapp.com/updatefornecedor', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome:this.state.nome,
          cnpj:this.state.cnpj,
          newnome:this.state.newnome,
          newuf:this.state.newuf
        }),
    });
    response.then((res)=>{
      if(res.status===200){
        alert('Salvo com sucesso');
        this.setState({
        nome:'',
        cnpj:'',
        newnome:'',
        newuf:''
        })

      }
      else if(res.status === 404){
        alert('Fornecedor não encontrado')
      }
      else{
        alert('Entre com os valores corretos')
      }
    })
    } catch (error) {
      console.error(error);
    }
  
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    var {newnome,cnpj,newuf,nome} = this.state;
    return (
      <>
      <NavBar/>
        <div className="wrapper">
          <div className="page-header">
            <div className="page-header-image" />
            <div className="content">
            <button type="button" className="btn-icon btn-round btn btn-info"
                onClick={()=>{window.location.href="/painel"}}
              >        
                 <i className="tim-icons icon-double-left iconProduct"/>
            </button>
              <h1>Atualizar Usuário</h1>
              <Container>
              <Form className={"form"} onSubmit={this.handleSubmit}>
                <Input type="text" className="form-input" placeholder="Nome" name="nome" value={nome} onChange={this.handleInputChange}/>
                <Input type="number" className="form-input" placeholder="CNPJ" name="cnpj" value={cnpj} onChange={this.handleInputChange}/>
                <Input type="text" className="form-input" placeholder="Novo Nome" name="newnome" value={newnome} onChange={this.handleInputChange}/>
                <Input type="text" className="form-input" placeholder="Novo UF" name="newuf" value={newuf} onChange={this.handleInputChange}/>

                <Input type="submit" value="Atualizar" />
              </Form>
              </Container>
            </div>
          </div>
      <Footer/>
      </div>
      </>
    );
  }
}
