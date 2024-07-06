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

export interface UserAndress {
  cep: string
  streetName: string
  houseNumber: number
  complementAddress?: string | undefined
  neighborhood: string
  cityName: string
  uf: string
  PaymentType: string | undefined
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
  uf: string
  cep: string
  userInformation: UserAndress
  convertedCost: (value: number) => void
  mascaraCep: (value: string) => void
  maskUF: (value: string) => void
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

  submitOrder: (data: UserAndress) => void
  submitButtonState: (state: boolean) => void
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
    const indexCoffee = checkout.findIndex(
      (coffe) => coffe.id === SelectedCoffee.id,
    )
    console.log('index Coffee=> ' + indexCoffee)
    if (indexCoffee !== -1) {
      console.log('quantity' + checkout[indexCoffee].quantity)
      checkout[indexCoffee].quantity = SelectedCoffee.quantity
      handleUpdateValue(SelectedCoffee.id)
    } else {
      setCheckout([...checkout, SelectedCoffee])
    }
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

  const [userInformation, setUserInformation] = useState({
    cep: '',
    streetName: '',
    houseNumber: 0,
    complementAddress: '',
    neighborhood: '',
    cityName: '',
    uf: '',
    payType: '',
  })
  const submitOrder = (data: UserAndress) => {
    const info = {
      cep: data.cep,
      streetName: data.streetName,
      houseNumber: data.houseNumber,
      complementAddress: data.complementAddress || '',
      neighborhood: data.neighborhood,
      cityName: data.cityName,
      uf: data.uf,
      payType,
    }
    setUserInformation(info)
    console.log({ userInformation })
  }

  const submitButtonState = (state: boolean) => {
    return state
  }

  const [cep, setCep] = useState('')
  const mascaraCep = (value: string) => {
    !value
      ? setCep('')
      : setCep(
          value
            .replace(/\D/g, '')
            .replace(/^(\d{5})(\d{3})+?$/, '$1-$2')
            .replace(/(-\d{3})(\d+?)/, '$1'),
        )
  }

  const UF = [
    'RO',
    'AC',
    'AM',
    'RR',
    'PA',
    'AP',
    'TO',
    'MA',
    'PI',
    'CE',
    'RN',
    'PB',
    'PE',
    'AL',
    'SE',
    'BA',
    'MG',
    'ES',
    'RJ',
    'SP',
    'PR',
    'SC',
    'RS',
    'MS',
    'MT',
    'DF',
  ]
  const [uf, setUF] = useState('')
  const maskUF = (value: string) => {
    if (value.length <= 2) {
      const ufIndentification = value.toUpperCase()
      const existUF = UF.includes(ufIndentification)
      console.log({ ufIndentification, existUF })
      if (existUF) {
        setUF(ufIndentification)
      }
    }
  }
  // endereço [endereço , numero e complemento se tiver]
  // previsão de entrega
  // tipo de pagamento

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
        cep,
        uf,
        userInformation,
        handleRemoveSpecificCoffee,
        paymentTypes,
        handleUpdateValue,
        totalAllPurchases,
        convertedCost,
        mascaraCep,
        maskUF,
        grandTotalOfPurchase,
        handleCounterClickPlus,
        handleCounterClickDown,
        handleQuantityCoffee,
        handleBuySpecificCoffe,
        handleFilterTags,
        submitOrder,
        submitButtonState,
      }}
    >
      {children}
    </MarketContext.Provider>
  )
}
