import { ReactNode, createContext, useEffect, useState } from 'react'

export interface CoffePropries {
  id: number
  title: string
  description: string
  image: string
  price: number
  quantity: number
  tags: {
    tag: string
  }[]
  total: number
}
export interface MarketContextType {
  coffes: CoffePropries[]
  checkout: CoffePropries[]
  quantityCoffesOrderted: number
  costFreight: number
  money: boolean
  credit: boolean
  debit: boolean
  payType: string
  convertedCost: (value: number) => void
  // totalValueThisCoffeeOrders: (coffeeId: CoffePropries) => void
  grandTotalOfPurchase: (costFreight: number) => void
  handleUpdateValue: (idCoffee: number) => void
  totalAllPurchases: () => void
  paymentTypes: (types: string) => void
  handleRemoveSpecificCoffee: (coffeeId: number) => void
  handleCounterClickPlus: (
    e: React.MouseEvent<HTMLButtonElement>,
    coffe: CoffePropries,
  ) => void
  handleCounterClickDown: (
    e: React.MouseEvent<HTMLButtonElement>,
    coffe: CoffePropries,
  ) => void
  handleBuySpecificCoffe: (SelectedCoffee: CoffePropries) => void
  handleQuantityCoffee: (
    e: React.MouseEvent<HTMLButtonElement>,
    initialValue: number,
  ) => number
  handleFilterTags: (coffeData: CoffePropries[], type: string) => void
}

export const MarketContext = createContext({} as MarketContextType)

interface MarketContextProviderProps {
  children: ReactNode
}

export function MarketContextProvider({
  children,
}: MarketContextProviderProps) {
  function handleQuantityCoffee(
    e: React.MouseEvent<HTMLButtonElement>,
    initialValue: number,
  ) {
    const parentDiv = e.currentTarget.parentNode as HTMLElement
    const inputElement = parentDiv.querySelector(
      'input[type=number]',
    ) as HTMLInputElement | null
    console.log(Number(inputElement?.value) + initialValue)
    return Number(inputElement?.value) + initialValue > 0
      ? Number(inputElement?.value) + initialValue
      : 0
  }

  const [checkout, setCheckout] = useState<CoffePropries[]>([])
  const handleBuySpecificCoffe = (SelectedCoffee: CoffePropries) => {
    setCheckout((addCheckout) => [...addCheckout, SelectedCoffee])
  }

  function handleCounterClickPlus(
    e: React.MouseEvent<HTMLButtonElement>,
    coffee: CoffePropries,
  ) {
    const parentDiv = e.currentTarget.parentNode as HTMLElement
    const indexCoffee = checkout.indexOf(coffee)
    if (indexCoffee !== -1) {
      checkout[indexCoffee].quantity = handleQuantityCoffee(e, 1)
      handleUpdateValue(coffee.id)
    }

    coffee.quantity = handleQuantityCoffee(e, 1)
    coffee.total = coffee.quantity * coffee.price
    return (
      parentDiv.querySelector('input[type=number]') as HTMLInputElement
    ).stepUp()
  }

  function handleCounterClickDown(
    e: React.MouseEvent<HTMLButtonElement>,
    coffee: CoffePropries,
  ) {
    const parentDiv = e.currentTarget.parentNode as HTMLElement
    const indexCoffee = checkout.indexOf(coffee)
    if (indexCoffee !== -1) {
      checkout[indexCoffee].quantity = handleQuantityCoffee(e, -1)
      console.log({ checkout })
      handleUpdateValue(coffee.id)
    }
    coffee.quantity = handleQuantityCoffee(e, -1)
    coffee.total = coffee.quantity * coffee.price
    const inputElement = parentDiv.querySelector(
      'input[type=number]',
    ) as HTMLInputElement | null
    return inputElement?.stepDown()
  }

  const [coffes, setCoffes] = useState<CoffePropries[]>([])
  const [tagSelect, setTagSelect] = useState<string[]>([])
  function handleFilterTags(listCoffes: CoffePropries[], Tag: string) {
    setTagSelect([...tagSelect, Tag])
    setCoffes([])
    console.log({ tagSelect, Tag })
    if (tagSelect.indexOf(Tag) === -1) {
      const filtered = listCoffes.filter((coffe) => {
        return coffe.tags.some(
          (tag) => tag.tag === Tag && tag.tag !== undefined,
        )
      })
      console.log({ filtered, coffes })
      setCoffes(filtered)
      setTagSelect([])
    }
  }

  const handleUpdateValue = (coffeeId: number) => {
    setCheckout((prevCheckout: CoffePropries[]) =>
      prevCheckout.map((coffe) => {
        if (coffe.id === coffeeId) {
          const updatedCoffe = { ...coffe, total: coffe.price * coffe.quantity }
          return updatedCoffe
        }
        return coffe
      }),
    )
  }
  const [totalItens, setTotalItems] = useState(0)
  const totalAllPurchases = () => {
    setTotalItems(
      checkout.reduce((total, coffe) => {
        return total + coffe.total
      }, 0),
    )

    return convertedCost(totalItens)
  }

  const quantityCoffesOrderted = checkout.length

  const costFreight = 5.85
  const convertedCost = (value: number) => {
    if (value === undefined) {
      return value
    } else {
      return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
    }
  }
  // const totalPuch = 5.85
  const grandTotalOfPurchase = (costFreight: number) => {
    const total = totalItens + costFreight
    return total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  const [money, setMoney] = useState(false)
  const [credit, setCredit] = useState(false)
  const [debit, setDebit] = useState(false)
  const [payType, setPayType] = useState<string>('')
  const paymentTypes = (type: string) => {
    setMoney(false)
    setCredit(false)
    setDebit(false)
    setPayType('')
    if (type === 'money') {
      setMoney(true)
      setPayType('Dinheiro')
    } else if (type === 'credit_card') {
      setCredit(true)
      setPayType('Cartão de Crédito')
    } else if (type === 'debit_card') {
      setDebit(true)
      setPayType('Cartão de Débito')
    }
    console.log({
      type,
      money,
      credit,
      debit,
      payType,
    })
  }
  const handleRemoveSpecificCoffee = (coffeeId: number) => {
    const removeItem = checkout.filter((check) => check.id !== coffeeId)
    setCheckout(removeItem)
  }
  useEffect(() => {}, [checkout])
  return (
    <MarketContext.Provider
      value={{
        coffes,
        checkout,
        quantityCoffesOrderted,
        costFreight,
        money,
        credit,
        debit,
        payType,
        handleRemoveSpecificCoffee,
        paymentTypes,
        handleUpdateValue,
        totalAllPurchases,
        convertedCost,
        grandTotalOfPurchase,
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
