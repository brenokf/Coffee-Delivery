import styled from 'styled-components'

export const FrameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 448px;
  height: 498px;
  padding: 40px;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  background: ${(props) => props.theme['base-card']};
  border-top-left-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 6px;

  hr {
    width: 368px;
    border: 1px solid ${(props) => props.theme['base-button']};
    margin: 24px 0 24px 0;
  }
`
export const CoffeeCardItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 368px;
  height: 80px;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: ${(props) => props.theme['base-text']};
  }
`
export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 255px;
  height: 64px;
  img {
    width: 64px;
    height: 64px;
  }
  gap: 20px;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 171px;
  height: 64px;
  gap: 8px;

  P {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 32px;
  gap: 8px;
`
export const CounterButton = styled.button`
  outline: none;
  -webkit-appearance: none;
  border: none;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  cursor: pointer;
  background-color: transparent;

  svg {
    color: ${(props) => props.theme.purple};
  }
  svg:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const BuyCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 72px;
  height: 38px;
  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};
  button {
  }

  input[type='number'] {
    font-family: '  Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    max-width: 20px;
    background: ${(props) => props.theme['base-button']};
    border: none;
    font-size: 14px;
    height: 21px;
    font-weight: bold;
    text-align: center;
  }
  input[type='number'] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`
export const RemoveItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 91px;
  height: 32px;
  border: none;
  border-radius: 6px;
  gap: 4px;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme['base-text']};

  background: ${(props) => props.theme['base-button']};
  svg {
    color: ${(props) => props.theme.purple};
  }
  /* svg:hover {
    color: ${(props) => props.theme.red};
  } */
`
export const TotalPurchaseAndDelivery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 368px;
  height: 92px;
  margin-bottom: 20px;
`
export const TotalPurchase = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 21px;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
    max-width: 84px;
    height: 18px;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
    max-width: 84px;
    height: 18px;
  }
`
export const DeliveryFee = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 21px;
  span {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
    max-width: 84px;
    height: 18px;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
    max-width: 84px;
    height: 18px;
  }
`
export const Total = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 21px;
  span,
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: Bold;
    color: ${(props) => props.theme['base-subtitle']};
    max-width: 84px;
    height: 18px;
  }
`
export const ConfirmOrder = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 368px;
  height: 46px;
  border: none;
  border-radius: 6px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: bold;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
`
