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

import { useFormContext } from 'react-hook-form'
import { MarketContext } from '../../../contexts/Marketcontext'
import { useContext } from 'react'

export function Frame() {
  const { money, credit, debit, cep, paymentTypes, mascaraCep } =
    useContext(MarketContext)
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const handleMaskCep = (value: string) => {
    if (value.length <= 8) {
      mascaraCep(value)
    }
  }

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
          <CEPInput
            id="cep"
            type="text"
            placeholder="CEP"
            autoComplete="postal-code"
            {...register('cep')}
            value={cep}
            maxLength={9}
            onChange={(e) => {
              handleMaskCep(e.target.value)
            }}
          />
          {errors.cep && (
            <span style={{ color: 'red', fontSize: 12 }}>
              {errors.cep.message as string}
            </span>
          )}

          <StreetInput
            id="streetName"
            type="text"
            placeholder="Rua"
            autoComplete="address-line1"
            {...register('streetName')}
          />
          {errors.streetName && (
            <span style={{ color: 'red', fontSize: 12 }}>
              {errors.streetName.message as string}
            </span>
          )}

          <InfoContainer>
            <HouseNumberInput
              id="houseNumber"
              type="number"
              placeholder="Numero"
              autoComplete="address-line2"
              {...register('houseNumber', { valueAsNumber: true })}
            />
            {errors.houseNumber && (
              <span style={{ color: 'red', fontSize: 12 }}>
                {errors.houseNumber.message as string}
              </span>
            )}

            <ComplementAddressInput
              id="complementAddress"
              type="text"
              placeholder="Complemento"
              autoComplete="address-line2"
              {...register('complementAddress')}
            />
          </InfoContainer>
          <InfoContainer>
            <NeighborhoodInput
              id="neighborhood"
              type="text"
              placeholder="Bairro"
              autoComplete="address-level2"
              {...register('neighborhood')}
            />
            {errors.neighborhood && (
              <span style={{ color: 'red', fontSize: 12 }}>
                {errors.neighborhood.message as string}
              </span>
            )}

            <CityInput
              id="cityName"
              type="text"
              placeholder="Cidade"
              autoComplete="address-level2"
              {...register('cityName')}
            />
            {errors.cityName && (
              <span style={{ color: 'red', fontSize: 12 }}>
                {errors.cityName.message as string}
              </span>
            )}

            <UFInput
              id="uf"
              type="text"
              placeholder="UF"
              autoComplete="address-level1"
              maxLength={2}
              {...register('uf')}
            />
            {errors.uf && (
              <span style={{ color: 'red', fontSize: 12 }}>
                {errors.uf.message as string}
              </span>
            )}
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
            onClick={() => paymentTypes('credit_card')}
            type="button"
          >
            <CreditCard size={16} />
            CARTÃO DE CRÉDITO
          </PaymentMethodInput>
          <PaymentMethodInput
            isSelected={debit}
            onClick={() => paymentTypes('debit_card')}
            type="button"
          >
            <Bank size={16} />
            CARTÃO DE DEBITO
          </PaymentMethodInput>
          <PaymentMethodInput
            isSelected={money}
            onClick={() => paymentTypes('money')}
            type="button"
          >
            <Money size={16} />
            DINHEIRO
          </PaymentMethodInput>
        </FramePayButtonsContainer>
      </CoffeeCardPayContainer>
    </FrameContainer>
  )
}
