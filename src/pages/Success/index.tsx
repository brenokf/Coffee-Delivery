import { OrderInfo } from './OrderInfo'
import Illustration from '../../assets/Illustration.svg'
import { SuccessContainer } from './styles'
export function Success() {
  return (
    <SuccessContainer>
      <OrderInfo />
      <img src={Illustration} alt="" />
    </SuccessContainer>
  )
}
