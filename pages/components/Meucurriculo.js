import React from "react";
import { Component } from "react";




class Meucurriculo extends Component {
  render() {
return(
  <>
    <section id="curriculo">
    <div className="w3-content w3-margin-top" style={{maxWidth: '1400px'}}>
      <div className="w3-row-padding">
        <div className="w3-third">
          <div className="w3-white w3-text-grey w3-card-4">
            <div className="w3-display-container">
              <img src="./marco.jpg" style={{width: '100%'}} alt="Avatar" />
              <div className="w3-display-bottomleft w3-container w3-text-black">
              </div>
            </div>
            <div className="w3-container">
              <h2>Marco Aurélio de Moraes Oliveira</h2>
              <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />Vigilante (Emprego Atual)</p>
              <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" />São José dos Campos- SP</p>
              <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />marco1992sjc@gmail.com</p>
              <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />(12) 98213-8934</p>
              <hr />
              <p className="w3-large w3-text-theme"><b>Sobre</b></p>
              Sou um profissional com anos de experiência na área de vendas e atendimento ao público, atuando como vendedor, assistente de vendas, controlador de acesso e vigilante.
              Apaixonado por tecnologia, acompanho e leio muito sobre.
              Estou cursando Sistemas para Internet e meu sonho é ingressar na área de desenvolvimento e me tornar um desenvolvedor de sites e também aplicativos para smartphones.
              Meu intuito é estudar muito e me aperfeiçoar como dev e ser o melhor no que faço, sem pisar em ninguém, obtendo conhecimento e passando adiante. 
            </div>
          </div><br />
        </div>
        <div className="w3-twothird">
          <div className="w3-container w3-card w3-white w3-margin-bottom">
            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Experiência</h2>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>Vigilante / Grupo Souza Lima</b></h5>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Jul 2018 - <span className="w3-tag w3-teal w3-round">Atual</span></h6>
              <p>Responsabilidades inerentes a função.</p>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>Controlador de Acesso / Segvap Ltda</b></h5>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Jul 2016 - Ju 2018</h6>
              <p>Controle de acesso, atendimento telefônico, monitoramento de câmeras de segurança cftv, vistorias veículares</p>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>Vendedor / Saldão dos Pisos</b></h5>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Fev 2013 - Dez 2015</h6>
              <p>Vendas, controle de estoque. </p><br />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>Assistente de Vendas / Casa de Ferragens Casa Satélite</b></h5>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Ago 2010 - Set 2012</h6>
              <p>Vendas, compras, cadastro de produtos, controle do estoque, emissão de nota fiscal, treinamento e parte administrativa</p>
            </div>
          </div>
          <div className="w3-container w3-card w3-white">
            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Formação Acadêmica</h2>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>Estácio de Sá</b></h5>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Cursando 2021-2023</h6>
              <p>Curso Superior de Tecnologia (CST), Sistemas para Internet</p>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>Instituto Federal de Educação, Ciência e Tecnologia de São Paulo - IFSP</b></h5>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2018 - 2018</h6>
              <p>Ensino Médio</p>
              <hr />
              <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Cursos Complementares</h2>
              <h5 className="w3-opacity"><b>Microcamp Tecnologia</b></h5>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" /> 27/08/2007- 23/04/2009 (216hrs)</h6>
              <p>Pacote Office/windows/front page</p>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" /> 20/02/2008- 19/03/2008</h6>
              <p>Hardware </p>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" /> 15/09/2007- 25/10/2007 </h6>
              <p>Digitação Eletrônica</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
)

  }
}

export default Meucurriculo; 