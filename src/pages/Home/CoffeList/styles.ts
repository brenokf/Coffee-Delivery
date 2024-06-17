import styled from 'styled-components'

// ${(props) => props.theme[TYPE_COLORS[props.itemColor]]};
export const ContainerList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 2.5rem 18rem 2.5rem;
  gap: 54px;
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 32px;
    font-weight: 800;
  }
`
export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`

export const Tag = styled.button`
  pointer-events: all;
  display: flex;
  max-width: 100%;
  max-height: 100%;
  align-items: flex-start;
  text-align: start;
  padding: 5px 12px 5px;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.yellow};
  border-radius: 100px;

  a {
    font-size: 10px;
    font-weight: bold;
    line-height: 130%;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['yellow-dark']};
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['yellow-dark']};
    a {
      color: ${(props) => props.theme.white};
    }
  }

  &.active {
    content: '';
    background-color: ${(props) => props.theme['yellow-dark']};
    a {
      color: ${(props) => props.theme.white};
    }
  }
`

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 19px;
`

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 270px;
  height: 320px;
  margin-bottom: 40px;
  background: ${(props) => props.theme['base-card']};
  padding: 0.8rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`
export const ImgContainerCard = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-items: center;
  margin-top: -30px;
`
export const TagCardContainer = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`

export const TagCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 21px;
  padding: 0 7px 0;
  border-radius: 100px;
  background: ${(props) => props.theme['yellow-light']};
  margin: 20px 0 10px;
  span {
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  margin-bottom: 32px;
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 20px;
    font-weight: bold;
  }
  span {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;

    color: ${(props) => props.theme['base-text']};
  }
`
export const CardBuy = styled.div`
  width: 208px;
  height: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 23px;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }
  span strong {
    padding-left: 2px;
    font-family: 'Baloo 2', sans-serif;
    font-size: 24px;
    font-weight: 800;
  }
`
export const CardBuyActions = styled.div`
  display: flex;
  width: 118px;
  height: 38px;
  gap: 8px;
  button[type='submit'] {
    outline: none;
    border: 0;
    width: 38px;
    height: 38px;
    border-radius: 6px;
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};
    transition: 0.1s;

    &:hover {
      background-color: ${(props) => props.theme.purple};
      color: ${(props) => props.theme.white};
    }
  }
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
    font-family: sans-serif;
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
