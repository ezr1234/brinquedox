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
        marca:'',
        dimensoes:'',
        peso:'',
        imagem:'',
        categoria:'',
        valor:'',
        descricao:''
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
      let response = fetch('http://localhost:8080/insertproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome:this.state.nome,
            marca:this.state.marca,
            dimensoes:this.state.dimensoes,
            peso:this.state.peso,
            imagem:this.state.imagem,
            categoria:this.state.categoria,
            valor:this.state.valor,
            descricao:this.state.descricao

        }),
    });
    response.then((res)=>{
      if(res.status===200){
        alert('Salvo com sucesso');
        this.setState({nome:'',
        marca:'',
        dimensoes:'',
        peso:'',
        imagem:'',
        categoria:'',
        descricao:'',
        valor:''    
    })

      }
      else if(res.status === 403){
        alert('Produto já existente')
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
    var {categoria,peso,dimensoes,marca,imagem,nome,descricao,valor} = this.state;
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
              <h1>Cadastrar Produto</h1>
              <Container>
              <Form className={"form"} onSubmit={this.handleSubmit}>
                <Input type="text" className="form-input" placeholder="Nome" name="nome" value={nome} onChange={this.handleInputChange}/>
                <Input type="text" className="form-input" placeholder="Categoria" name="categoria" value={categoria} onChange={this.handleInputChange}/>
                <Input type="number" className="form-input" placeholder="Peso" name="peso" value={peso} onChange={this.handleInputChange}/>
                <Input type="text" className="form-input" placeholder="Dimensões" name="dimensoes" value={dimensoes} onChange={this.handleInputChange}/>
                <Input type="text" className="form-input" placeholder="Marca" name="marca" value={marca} onChange={this.handleInputChange}/>
                <Input type="text" className="form-input" placeholder="Imagem" name="imagem" value={imagem} onChange={this.handleInputChange}/>
                <Input type="text" className="form-input" placeholder="Descrião" name="descricao" value={descricao} onChange={this.handleInputChange}/>
                <Input type="number" className="form-input" placeholder="Valor" name="valor" value={valor} onChange={this.handleInputChange}/>


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
