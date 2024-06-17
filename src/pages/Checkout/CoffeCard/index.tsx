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

import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { CoffePropries, MarketContext } from '../../../contexts/Marketcontext'

export function CoffeeCard() {
  const {
    handleCounterClickDown,
    handleCounterClickPlus,
    checkout,
    costFreight,
    handleUpdateValue,
    totalAllPurchases,
    convertedCost,
    grandTotalOfPurchase,
    handleRemoveSpecificCoffee,
  } = useContext(MarketContext)

  return (
    <FrameContainer>
      <h4>Cafés selecionados</h4>
      <CoffeeCardContainer>
        {checkout.map((coffee) => {
          return (
            <CoffeeCardItem key={coffee.id}>
              <InfoContainer>
                <img src={coffee.image} alt="" />
                <DetailsContainer>
                  <p>{coffee.title}</p>
                  <Actions>
                    <BuyCounter>
                      <CounterButton
                        onClick={(e) => {
                          handleCounterClickDown(e, coffee)
                        }}
                      >
                        <Minus size={14} weight="bold" />
                      </CounterButton>
                      <input
                        min="0"
                        name="quantity"
                        value={coffee.quantity}
                        type="number"
                      />
                      <CounterButton
                        onClick={(e) => {
                          handleCounterClickPlus(e, coffee)
                        }}
                      >
                        <Plus size={14} weight="bold" />
                      </CounterButton>
                    </BuyCounter>
                    <RemoveItem
                      onClick={() => {
                        handleRemoveSpecificCoffee(coffee.id)
                      }}
                    >
                      <Trash size={16} /> REMOVER
                    </RemoveItem>
                  </Actions>
                </DetailsContainer>
              </InfoContainer>
              <p>{`${convertedCost(coffee.total)}`}</p>
            </CoffeeCardItem>
          )
        })}
        <hr />
        <TotalPurchaseAndDelivery>
          <TotalPurchase>
            <span>Total Itens</span>
            <p>{`${totalAllPurchases()}`}</p>
          </TotalPurchase>
          <DeliveryFee>
            <span>Entrega</span>
            <p>{`${convertedCost(costFreight)}`}</p>
          </DeliveryFee>
          <Total>
            <span>Total</span>
            <p>{`${grandTotalOfPurchase(costFreight)}`}</p>
          </Total>
        </TotalPurchaseAndDelivery>
        <ConfirmOrder onClick={() => {}}>CONFIRMAR PEDIDO</ConfirmOrder>
      </CoffeeCardContainer>
    </FrameContainer>
  )
}
