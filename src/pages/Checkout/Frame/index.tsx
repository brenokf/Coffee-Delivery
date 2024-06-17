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

import { useForm } from 'react-hook-form'
import { MarketContext } from '../../../contexts/Marketcontext'
import { useContext } from 'react'

export function Frame() {
  const { money, credit, debit, paymentTypes } = useContext(MarketContext)
  const { register } = useForm()

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
          <CEPInput type="text" placeholder="CEP" {...register('cep')} />
          <StreetInput
            id="streetName"
            type="text"
            placeholder="Rua"
            {...register('streetName')}
          />
          <InfoContainer>
            <HouseNumberInput
              id="houseNumber"
              type="number"
              placeholder="Numero"
              {...register('houseNumber', { valueAsNumber: true })}
            />
            <ComplementAddressInput
              id="complementAddress"
              type="text"
              placeholder="Complemento"
              datatype="text"
              {...register('complementAddress')}
            />
          </InfoContainer>
          <InfoContainer>
            <NeighborhoodInput
              id="neighborhood"
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            <CityInput
              id="cityName"
              type="text"
              placeholder="Cidade"
              {...register('cityName')}
            />
            <UFInput id="uf" type="text" placeholder="UF" {...register('uf')} />
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
          <PaymentMethodInput
            isSelected={credit}
            onClick={() => {
              paymentTypes('credit_card')
            }}
          >
            <CreditCard size={16} />
            CARTÃO DE CRÉDITO
          </PaymentMethodInput>
          <PaymentMethodInput
            isSelected={debit}
            onClick={() => {
              paymentTypes('debit_card')
            }}
          >
            <Bank size={16} />
            CARTÃO DE DEBITO
          </PaymentMethodInput>
          <PaymentMethodInput
            isSelected={money}
            onClick={() => {
              paymentTypes('money')
            }}
          >
            <Money size={16} />
            DINHEIRO
          </PaymentMethodInput>
        </FramePayButtonsContainer>
      </CoffeeCardPayContainer>
    </FrameContainer>
  )
}
