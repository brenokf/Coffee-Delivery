import {
  CEPInput,
  CityInput,
  CoffeeCardFormContainer,
  CoffeeCardPayContainer,
  ComplementAddressInput,
  FormsContainer,
  FrameContainer,
  FrameFormTitle,
  FramePayButtonsContainer,
  FramePayContainer,
  FramePayTitle,
  HouseNumberInput,
  InfoContainer,
  NeighborhoodInput,
  PaymentMethodInput,
  StreetInput,
  UFInput,
} from './styles'
import {
  MapPinLine,
  CreditCard,
  CurrencyDollar,
  Bank,
  Money,
} from 'phosphor-react'
export function Frame() {
  return (
    <FrameContainer>
      <h4>Complete seu pedido</h4>
      <CoffeeCardFormContainer>
        <FrameFormTitle>
          <MapPinLine size={22} />
          <div>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </FrameFormTitle>
        <FormsContainer>
          <CEPInput type="text" placeholder="CEP" />
          <StreetInput type="text" placeholder="Rua" />
          <InfoContainer>
            <HouseNumberInput type="number" name="" placeholder="Numero" />
            <ComplementAddressInput
              type="text"
              placeholder="Complemento"
              datatype="text"
            />
          </InfoContainer>
          <InfoContainer>
            <NeighborhoodInput type="text" name="" placeholder="Bairro" />
            <CityInput type="text" name="" placeholder="Cidade" />
            <UFInput type="text" name="" placeholder="UF" />
          </InfoContainer>
        </FormsContainer>
      </CoffeeCardFormContainer>
      <CoffeeCardPayContainer>
        <FramePayContainer>
          <CurrencyDollar size={22} />
          <FramePayTitle>
            <p>Pagamento</p>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </FramePayTitle>
        </FramePayContainer>
        <FramePayButtonsContainer>
          <PaymentMethodInput>
            <CreditCard size={16} />
            CARTÃO DE CRÉDITO
          </PaymentMethodInput>
          <PaymentMethodInput>
            <Bank size={16} />
            CARTÃO DE DEBITO
          </PaymentMethodInput>
          <PaymentMethodInput>
            <Money size={16} />
            DINHEIRO
          </PaymentMethodInput>
        </FramePayButtonsContainer>
      </CoffeeCardPayContainer>
    </FrameContainer>
  )
}
