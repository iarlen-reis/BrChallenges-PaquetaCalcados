/* eslint-disable import/no-absolute-path */
import React from 'react'

import MasterCard from '/Images/Footer/MasterCard.png'
import AmericanExpress from '/Images/Footer/AmericaExpress.png'
import Elo from '/Images/Footer/Elo.png'
import Paqueta from '/Images/Footer/Paqueta.png'
import Gaston from '/Images/Footer/Gaston.png'
import Visa from '/Images/Footer/Visa.png'
import HiperCard from '/Images/Footer/HiperCard.png'
import Itau from '/Images/Footer/Itau.png'
import Boleto from '/Images/Footer/Boleto.png'
import Pinterest from '/Images/Footer/Pinterest.png'
import Award from '/Images/Footer/Award.png'
import Blindado from '/Images/Footer/Blindado.png'

import { FiFacebook, FiTwitter, FiYoutube, FiInstagram } from 'react-icons/fi'

import { Fade } from 'react-awesome-reveal'

import {
  FooterStyled,
  FooterContainer,
  ColumnFooterStyled,
  SpecialColumnFooterStyled,
  PaymentColumnStyled,
  SocialColumnStyled,
  LastColumnStyled,
} from './styles'

const Footer = () => {
  return (
    <Fade direction="up" triggerOnce={true} delay={500}>
      <FooterStyled>
        <FooterContainer>
          <ColumnFooterStyled>
            <li>
              <h3>Institucional</h3>
            </li>
            <li>
              <a href="#">Quem Somos</a>
            </li>
            <li>
              <a href="#">Nossas Lojas</a>
            </li>
            <li>
              <a href="#">Soluções Corporativas</a>
            </li>
            <li>
              <a href="#">Política de Privacidade</a>
            </li>
            <li>
              <a href="#">Contrato de Compra e Venda</a>
            </li>
            <li>
              <a href="#">Crédito Pessoal</a>
            </li>
          </ColumnFooterStyled>

          <ColumnFooterStyled>
            <li>
              <h3>Ajuda e Suporte</h3>
            </li>
            <li>
              <a href="#">Troca e Devolução</a>
            </li>
            <li>
              <a href="#">2ª Via do Boleto</a>
            </li>
            <li>
              <a href="#">Detalhamento de Fatura</a>
            </li>
            <li>
              <a href="#">Entregas</a>
            </li>
            <li>
              <a href="#">Meus Pedidos</a>
            </li>
            <li>
              <a href="#">Dúvidas Frequentes</a>
            </li>
            <li>
              <a href="#">Status do Pedido</a>
            </li>
          </ColumnFooterStyled>

          <SpecialColumnFooterStyled>
            <div>
              <h3>Atendimento</h3>
              <a href="#">Fale Conosco</a>
            </div>
            <div>
              <h3>Endereço</h3>
              <a href="#">
                Rua Antonio Frederico Ozanan, 2601 Canoas - RS | CNPJ:
                01.098.983/0175-02
              </a>
            </div>
            <div>
              <h3>Trabalhe Conosco</h3>
              <a href="#">Venha crescer com a Paquetá!</a>
            </div>
          </SpecialColumnFooterStyled>
          <PaymentColumnStyled>
            <h3>Formas de Pagamento</h3>
            <ul>
              <li>
                <img src={MasterCard} alt=" logo da mastercard" />
              </li>
              <li>
                <img src={AmericanExpress} alt=" logo da AmericanExpress" />
              </li>
              <li>
                <img src={Elo} alt=" logo da Elo" />
              </li>
            </ul>
            <ul>
              <li>
                <img src={Paqueta} alt=" logo da Paqueta" />
              </li>
              <li>
                <img src={Gaston} alt=" logo da Gaston" />
              </li>
              <li>
                <img src={Visa} alt=" logo da Visa" />
              </li>
            </ul>
            <ul>
              <li>
                <img src={HiperCard} alt=" logo da HiperCard" />
              </li>
              <li>
                <img src={Itau} alt=" logo da Itau" />
              </li>
              <li>
                <img src={Boleto} alt="icone de um Boleto" />
              </li>
            </ul>
            <SocialColumnStyled>
              <h3>Redes Sociais</h3>
              <ul>
                <li>
                  <FiInstagram />
                </li>
                <li>
                  <FiFacebook />
                </li>
                <li>
                  <FiTwitter />
                </li>
                <li>
                  <FiYoutube />
                </li>
                <li>
                  <img src={Pinterest} alt="logo da pinterest" />
                </li>
              </ul>
            </SocialColumnStyled>
          </PaymentColumnStyled>
          <LastColumnStyled>
            <div>
              <h3>Prêmios e Certificações</h3>
              <img src={Award} alt="prêmios e certificações" />
            </div>
            <div>
              <h3>Segurança</h3>
              <img src={Blindado} alt="Segurança" />
            </div>
          </LastColumnStyled>
        </FooterContainer>
      </FooterStyled>
    </Fade>
  )
}

export default Footer
