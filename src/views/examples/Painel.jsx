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

import css from '../../assets/css/painel.css'
import NavBar from '../../components/Navbars/ExamplesNavbar'
import Footer from '../../components/Footer/Footer'

// import { Container } from './styles';

const submit = async () =>{

  try {
    let response = await fetch('localhost:8080/newuser', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
       nome:newUser.state.nome,
       email:newUser.state.email,
       senha:newUser.state.senha,
       cep:newUser.state.cep,
       cpf:newUser.state.cpf,
       endereco:newUser.state.endereco,
       numero:newUser.state.numero,
      }),
  });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }

}

export default class newUser extends Component {

  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }

  constructor(props) {
    super(props);
    this.state = {
      iconTabs: 1,
      textTabs: 4,
      user:{
        nome:'',
        email:'',
        senha:'',
        cpf:'',
        cep:'',
        numero:'',
        endereco:''
      }
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };

  render() {
    var {numero,endereco,senha,email,cpf,cep,nome} = this.state.user;
    return (
      <>
      <NavBar/>
        <div className="wrapper">
          <div className="page-header">
            <div className="page-header-image" />
            <div className="content">
              <h1>Cadastrar Usuário</h1>
              <Container>
              <Form className={"form"}>
                <Input type={"text"} className={"form-input"} placeholder="Nome"  value={nome}/>
                <Input type={"email"} className={"form-input"} placeholder="Email" value={email}/>
                <Input type={"password"} className={"form-input"} placeholder="Senha" value={senha}/>
                <Input type={"number"} className={"form-input"} placeholder="CPF" value={cpf}/>
                <Input type={"number"} className={"form-input"} placeholder="CEP" value={cep}/>
                <Input type={"text"} className={"form-input"} placeholder="Endereço" value={endereco}/>
                <Input type={"number"} className={"form-input"} placeholder="Número da casa" value={numero}/>

              <Button className={"btn btn-neutral form-submit"} onClick={submit()}>Salvar</Button>
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
