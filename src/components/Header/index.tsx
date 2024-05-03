import {
  ActionsContainer,
  CartActionContainer,
  CartCounter,
  HeaderContainer,
  LocationActionContainer,
} from './styles'
import logoCoffe from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { MarketContext } from '../../contexts/Marketcontext'
import { useContext } from 'react'
export function Header() {
  const { quantityCoffesOrderted } = useContext(MarketContext)
  return (
    <HeaderContainer>
      <img src={logoCoffe} alt="" />
      <nav>
        <ActionsContainer>
          <LocationActionContainer>
            <MapPin size={22} weight="fill" />
            <span>Manaus, AM</span>
          </LocationActionContainer>
          {quantityCoffesOrderted > 0 ? (
            <CartActionContainer>
              <ShoppingCart size={18} weight="fill" />
              <CartCounter>
                <p>{quantityCoffesOrderted}</p>
              </CartCounter>
            </CartActionContainer>
          ) : (
            <CartActionContainer>
              <ShoppingCart size={18} weight="fill" />
            </CartActionContainer>
          )}
        </ActionsContainer>
      </nav>
    </HeaderContainer>
  )
}
