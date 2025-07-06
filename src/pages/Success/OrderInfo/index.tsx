import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import {
  Local,
  OrderInfoContainer,
  OrderInfoInsideStructure,
  OrderInfoStructure,
  OrderInfoPersonalInformation,
  Payment,
  Time,
  OrderInfoHeader,
} from './styles'
import { MarketContext } from '../../../contexts/Marketcontext'
import { useContext } from 'react'

export function OrderInfo() {
  const { userInformation, checkout, payType } = useContext(MarketContext)
  // fallback para evitar undefined
  const street = userInformation?.streetName || ''
  const number = userInformation?.houseNumber || ''
  const neighborhood = userInformation?.neighborhood || ''
  const city = userInformation?.cityName || ''
  const uf = userInformation?.uf || ''
  const cep = userInformation?.cep || ''
  const complement = userInformation?.complementAddress || ''

  return (
    <OrderInfoContainer>
      <OrderInfoHeader>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </OrderInfoHeader>

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
                  {street}, {number}
                  {complement ? `, ${complement}` : ''}
                </strong>
                <br />
                {neighborhood} - {city}, {uf} <br />
                CEP: {cep}
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
                Pagamento na entrega{' '}
                <strong>{payType || 'Não informado'}</strong>
              </span>
            </Payment>
            {/* Lista completa de produtos do pedido */}
            {checkout && checkout.length > 0 && (
              <div style={{ marginTop: '1.5rem', fontSize: 14, width: '100%' }}>
                <strong>Produtos do pedido:</strong>
                <ul style={{ margin: '0.5rem 0 0 1rem', padding: 0 }}>
                  {checkout.map((item) => (
                    <li
                      key={item.id}
                      style={{ marginBottom: 4, listStyle: 'disc' }}
                    >
                      {item.title} (x{item.quantity}){' '}
                      {item.total?.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </OrderInfoPersonalInformation>
        </OrderInfoInsideStructure>
      </OrderInfoStructure>
    </OrderInfoContainer>
  )
}
