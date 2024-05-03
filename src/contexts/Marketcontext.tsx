import { ReactNode, createContext, useEffect, useState } from 'react'

export interface CoffePropries {
  description: string
  image: string
  price: number
  quantity: number
  tags: object[]
  title: string
}

export interface MarketContextType {
  addCheckout: CoffePropries[]
  quantityCoffesOrderted: number
  handleCounterClickPlus: (e: any, coffe: object) => void
  handleCounterClickDown: (e: any, coffe: object) => void
  handleBuySpecificCoffe: (SelectedCoffee: any) => void
  handleQuantityCoffee: (e: any, initialValue: number) => void
  handleFilterTags: (coffeData: object[], type: string) => void
}

export const MarketContext = createContext({} as MarketContextType)

interface MarketContextProviderProps {
  children: ReactNode
}

export function MarketContextProvider({
  children,
}: MarketContextProviderProps) {
  function handleCounterClickPlus(e, coffe) {
    const parentDiv = e.currentTarget.parentNode
    coffe.quantity = handleQuantityCoffee(e, 1)
    return parentDiv.querySelector('input[type=number]').stepUp()
  }

  function handleCounterClickDown(e, coffe) {
    coffe.quantity = handleQuantityCoffee(e, -1)
    const parentDiv = e.currentTarget.parentNode
    return parentDiv.querySelector('input[type=number]').stepDown()
  }

  function handleQuantityCoffee(e, initialValue) {
    const parentDiv = e.currentTarget.parentNode
    console.log(
      Number(parentDiv.querySelector('input[type=number]').value) +
        initialValue,
    )
    return (
      Number(parentDiv.querySelector('input[type=number]').value) + initialValue
    )
  }
  function handleFilterTags(coffeData: CoffePropries[], type: string) {
    return coffeData.filter((coffe) => coffe.tags.includes(type))
  }
  const [checkout, setCheckout] = useState<CoffePropries[]>([])
  const handleBuySpecificCoffe = (SelectedCoffee) => {
    setCheckout((addCheckout) => [...addCheckout, SelectedCoffee])
  }
  const addCheckout = checkout
  useEffect(() => {}, [checkout])
  console.log('addCheckout', addCheckout)

  const quantityCoffesOrderted = addCheckout.length
  console.log('quantityCoffesOrderted:', quantityCoffesOrderted)

  return (
    <MarketContext.Provider
      value={{
        addCheckout,
        quantityCoffesOrderted,
        handleCounterClickPlus,
        handleCounterClickDown,
        handleQuantityCoffee,
        handleBuySpecificCoffe,
        handleFilterTags,
      }}
    >
      {children}
    </MarketContext.Provider>
  )
}
