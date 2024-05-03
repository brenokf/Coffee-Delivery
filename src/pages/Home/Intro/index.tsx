import {
  BackgroundContainer,
  ContainerOptiosIntens,
  IconItem,
  InformationContainer,
  IntroContainer,
  ItenOption,
  TitleContainer,
} from './styles'
import { Timer, Coffee, Package, ShoppingCart } from 'phosphor-react'
import imagem from '../../../assets/Imagem.svg'
export function Intro() {
  return (
    <IntroContainer>
      <InformationContainer>
        <TitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TitleContainer>
        <ContainerOptiosIntens>
          <ItenOption>
            <IconItem itemColor="Brand">
              <ShoppingCart size={16} weight="fill" />
            </IconItem>
            <span>Compra simples e segura</span>
          </ItenOption>
          <ItenOption>
            <IconItem itemColor="Yellow">
              <Timer size={16} weight="fill" />
            </IconItem>
            <span>Entrega rápida e rastreada</span>
          </ItenOption>
          <ItenOption>
            <IconItem itemColor="Black">
              <Package size={16} weight="fill" />
            </IconItem>
            <span>Embalagem mantém o café intacto</span>
          </ItenOption>
          <ItenOption>
            <IconItem itemColor="Purple">
              <Coffee size={16} weight="fill" />
            </IconItem>
            <span>O café chega fresquinho até você</span>
          </ItenOption>
        </ContainerOptiosIntens>
      </InformationContainer>
      <img src={imagem} alt="" />
      <BackgroundContainer />
    </IntroContainer>
  )
}
