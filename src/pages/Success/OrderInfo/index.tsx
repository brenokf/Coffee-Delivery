import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import {
  Local,
  OrderInfoContainer,
  OrderInfoInsideStructure,
  OrderInfoStructure,
  OrderInfoPersonalInformation,
  Payment,
  Time,
} from './styles'
import { MarketContext } from '../../../contexts/Marketcontext'
import { useContext } from 'react'

export function OrderInfo() {
  const { userInformation } = useContext(MarketContext)
  const { streetName, houseNumber, neighborhood, cityName, uf, payType } =
    userInformation

  console.log({ depois: userInformation })
  return (
    <OrderInfoContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <span>Agora é só aguardar que logo o café chegará até você</span>

      <OrderInfoStructure>
        <OrderInfoInsideStructure>
          <OrderInfoPersonalInformation>
            <Local itemColor="Purple">
              <div>
                <MapPin size={16} weight="fill" />
              </div>

              <span>
                Entrega em <br />
                <strong>
                  {streetName}, {houseNumber},
                </strong>
                {neighborhood} - {cityName}, {uf}
              </span>
            </Local>
            <Time itemColor="Yellow">
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <span>
                Previsão de entrega <strong>20 min - 30 min </strong>
              </span>
            </Time>
            <Payment itemColor="Brand">
              <div>
                <CurrencyDollar size={16} weight="fill" />
              </div>
              <span>
                Pagamento na entrega <strong>{payType}</strong>
              </span>
            </Payment>
          </OrderInfoPersonalInformation>
        </OrderInfoInsideStructure>
      </OrderInfoStructure>
    </OrderInfoContainer>
  )
}
