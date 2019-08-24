import React, { Component } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
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
        email:'',
        senha:'',
        cpf:'',
        cep:'',
        numero:'',
        endereco:''
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
      let response = fetch('http://brinquedox.herokuapp.com/newuser', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome:this.state.nome,
          email:this.state.email,
          senha:this.state.senha,
          cpf:this.state.cpf,
          cep:this.state.cep,
          numero:this.state.numero,
          endereco:this.state.endereco,
        }),
    });
    response.then((res)=>{
      if(res.status===200){
        alert('Salvo com sucesso');
        this.setState({nome:'',
        email:'',
        senha:'',
        cpf:'',
        cep:'',
        numero:'',
        endereco:''})

      }
      else if(res.status === 403){
        alert('Usuário já existente')
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
    var {numero,endereco,senha,email,cpf,cep,nome} = this.state;
    return (
      <>
      <NavBar/>
        <div className="wrapper">
          <div className="page-header">
            <div className="page-header-image" />
            <div className="content">
              <h1>Cadastrar Usuário</h1>
              <Container>
              <Form className={"form"} onSubmit={this.handleSubmit}>
                <Input type="text" className="form-input" placeholder="Nome" name="nome" value={nome} onChange={this.handleInputChange}/>
                <Input type="email" className="form-input" placeholder="Email" name="email" value={email} onChange={this.handleInputChange}/>
                <Input type="password" className="form-input" placeholder="Senha" name="senha" value={senha} onChange={this.handleInputChange}/>
                <Input type="number" className="form-input" placeholder="CPF" name="cpf" value={cpf} onChange={this.handleInputChange}/>
                <Input type="number" className="form-input" placeholder="CEP" name="cep" value={cep} onChange={this.handleInputChange}/>
                <Input type="text" className="form-input" placeholder="Endereço" name="endereco" value={endereco} onChange={this.handleInputChange}/>
                <Input type="number" className="form-input" placeholder="Numero" name="numero" value={numero} onChange={this.handleInputChange}/>


                <Input type="submit" value="Enviar" />
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
