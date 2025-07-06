import styled from 'styled-components'

export const FrameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 600px) {
    width: 100vw;
    padding: 0 4px;
  }
`
export const CoffeeCardFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 372px;
  padding: 32px 40px 40px 40px;
  margin-bottom: 12px;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  @media (max-width: 600px) {
    padding: 16px 4px;
    height: auto;
  }
`
export const FrameFormTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 560px;
  height: 44px;
  gap: 16px;
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
  span {
    font-size: 14px;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }
  @media (max-width: 600px) {
    max-width: 100vw;
    height: auto;
    gap: 8px;
  }
`
export const FormsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 560px;
  height: 216px;
  padding-top: 32px;
  @media (max-width: 600px) {
    max-width: 100vw;
    padding-top: 12px;
    height: auto;
  }
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 560px;
  height: 42px;
  margin-bottom: 16px;
  @media (max-width: 600px) {
    max-width: 100vw;
    height: auto;
    margin-bottom: 8px;
  }
`
const InfoInputProps = styled.input`
  margin-right: 12px;
  height: 42px;
  padding: 18px;
  background: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
`

export const CEPInput = styled(InfoInputProps)`
  max-width: 200px;
  height: 42px;
  margin-bottom: 16px;
`
export const StreetInput = styled(InfoInputProps)`
  width: 100%;
  height: 42px;
  margin-bottom: 16px;
  padding: 18px;
`
export const HouseNumberInput = styled(InfoInputProps)`
  width: 200px;
`
export const ComplementAddressInput = styled(InfoInputProps)`
  width: 348px;
`
export const NeighborhoodInput = styled(InfoInputProps)`
  width: 200px;
`
export const CityInput = styled(InfoInputProps)`
  width: 276px;
`
export const UFInput = styled(InfoInputProps)`
  width: 60px;
`

export const CoffeeCardPayContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 207px;
  padding: 32px 40px 40px 40px;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  @media (max-width: 600px) {
    padding: 16px 4px;
    height: auto;
  }
`
export const FramePayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  height: 44px;
  gap: 16px;
  svg {
    color: ${(props) => props.theme.purple};
  }
  @media (max-width: 600px) {
    height: auto;
    gap: 8px;
  }
`
export const FramePayTitle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  max-width: 530px;
  height: 44px;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
  span {
    font-size: 14px;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }
`
export const FramePayButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 560px;
  height: 51px;
  margin-top: 32px;
  gap: 16px;
  @media (max-width: 600px) {
    width: 100vw;
    margin-top: 12px;
    gap: 8px;
  }
`

interface selected {
  isSelected: boolean
}

export const PaymentMethodInput = styled.button<selected>`
  display: flex;
  pointer-events: all;
  width: 31%;
  height: 51px;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  background: ${(props) =>
    props.isSelected
      ? props.theme['purple-light']
      : props.theme['base-button']};
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme['base-text']};
  gap: 12px;
  svg {
    color: ${(props) => props.theme.purple};
  }
  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme['base-hover']};
  }
  @media (max-width: 600px) {
    width: 100vw;
    min-width: 120px;
    font-size: 11px;
    height: 40px;
  }
`
