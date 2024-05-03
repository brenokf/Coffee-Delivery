import {
  Actions,
  BuyCounter,
  CoffeeCardContainer,
  CoffeeCardItem,
  ConfirmOrder,
  CounterButton,
  DeliveryFee,
  DetailsContainer,
  FrameContainer,
  InfoContainer,
  RemoveItem,
  Total,
  TotalPurchase,
  TotalPurchaseAndDelivery,
} from './styles'
import ExpressoTradicional from '../../../assets/coffees/Type=Expresso.svg'
import Latte from '../../../assets/coffees/Type=Latte.svg'
import { Minus, Plus, Trash } from 'phosphor-react'
export function CoffeeCard() {
  function handleCounterClickPlus(e) {
    console.log(e)
    const parentDiv = e.currentTarget.parentNode
    return parentDiv.querySelector('input[type=number]').stepUp()
  }

  function handleCounterClickDown(e) {
    const parentDiv = e.currentTarget.parentNode
    return parentDiv.querySelector('input[type=number]').stepDown()
  }

  return (
    <FrameContainer>
      <h4>Cafés selecionados</h4>
      <CoffeeCardContainer>
        <CoffeeCardItem>
          <InfoContainer>
            <img src={ExpressoTradicional} alt="icon" />
            <DetailsContainer>
              <p>Expresso Tradicional</p>
              <Actions>
                <BuyCounter>
                  <CounterButton
                    onClick={(e) => {
                      handleCounterClickDown(e)
                    }}
                  >
                    <Minus size={14} weight="bold" />
                  </CounterButton>
                  <input min="0" name="quantity" value="1" type="number" />
                  <CounterButton
                    onClick={(e) => {
                      handleCounterClickPlus(e)
                    }}
                  >
                    <Plus size={14} weight="bold" />
                  </CounterButton>
                </BuyCounter>
                <RemoveItem>
                  <Trash size={16} /> REMOVER
                </RemoveItem>
              </Actions>
            </DetailsContainer>
          </InfoContainer>
          <p>R$9,90</p>
        </CoffeeCardItem>
        <hr />
        <CoffeeCardItem>
          <InfoContainer>
            <img src={Latte} alt="icon" />
            <DetailsContainer>
              <p>Latte</p>
              <Actions>
                <BuyCounter>
                  <CounterButton
                    onClick={(e) => {
                      handleCounterClickDown(e)
                    }}
                  >
                    <Minus size={14} weight="bold" />
                  </CounterButton>
                  <input min="0" name="quantity" value="1" type="number" />
                  <CounterButton
                    onClick={(e) => {
                      handleCounterClickPlus(e)
                    }}
                  >
                    <Plus size={14} weight="bold" />
                  </CounterButton>
                </BuyCounter>
                <RemoveItem>
                  <Trash size={16} /> REMOVER
                </RemoveItem>
              </Actions>
            </DetailsContainer>
          </InfoContainer>
          <p>R$9,90</p>
        </CoffeeCardItem>
        <hr />
        <TotalPurchaseAndDelivery>
          <TotalPurchase>
            <span>Total Itens</span>
            <p>R$29,70</p>
          </TotalPurchase>
          <DeliveryFee>
            <span>Entrega</span>
            <p>R$3,50</p>
          </DeliveryFee>
          <Total>
            <span>Total</span>
            <p>R$33,20</p>
          </Total>
        </TotalPurchaseAndDelivery>
        <ConfirmOrder>CONFIRMAR PEDIDO</ConfirmOrder>
      </CoffeeCardContainer>
    </FrameContainer>
  )
}
