import {
  Filters,
  ContainerList,
  Tag,
  CoffeeCardContainer,
  CoffeeCard,
  TagCard,
  CardDescription,
  CardBuy,
  BuyCounter,
  CardBuyActions,
  ImgContainerCard,
  TagCardContainer,
  CounterButton,
} from './styles'
import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'
import { MarketContext, CoffePropries } from '../../../contexts/Marketcontext'
import { useContext, useEffect, useState } from 'react'

interface CoffeListProps {
  listCoffes: CoffePropries[]
}

export function CoffeList({ listCoffes }: CoffeListProps) {
  const {
    coffes,
    handleCounterClickDown,
    handleCounterClickPlus,
    handleBuySpecificCoffe,
    handleFilterTags,
  } = useContext(MarketContext)
  const [tagFilterExist, setTagFilterExist] = useState<string[]>([])

  useEffect(() => {
    if (tagFilterExist.length === 0) {
      const tags = new Set<string>()
      listCoffes.forEach((coffee: CoffePropries) => {
        coffee.tags.forEach((tag) => tags.add(tag.tag))
      })
      setTagFilterExist(Array.from(tags))
    }
  }, [coffes, tagFilterExist, listCoffes])
  return (
    <ContainerList>
      <h1>Nossos Cafés</h1>
      <Filters>
        {coffes.length === 0
          ? tagFilterExist.map((tag, index) => (
              <Tag
                key={index}
                onClick={() => handleFilterTags(listCoffes, tag)}
              >
                <a>{tag}</a>
              </Tag>
            ))
          : tagFilterExist.map((tag, index) => (
              <Tag
                key={index}
                onClick={() => handleFilterTags(listCoffes, tag)}
              >
                <a>{tag}</a>
              </Tag>
            ))}
      </Filters>
      <CoffeeCardContainer>
        {coffes.length === 0
          ? listCoffes.map((coffe, index: number) => {
              return (
                <CoffeeCard key={index}>
                  <ImgContainerCard>
                    <img src={coffe.image} alt="" />
                  </ImgContainerCard>
                  <TagCardContainer>
                    {coffe.tags.map((tag, index) => {
                      return (
                        <TagCard key={index}>
                          <span>{tag.tag}</span>
                        </TagCard>
                      )
                    })}
                  </TagCardContainer>
                  <CardDescription>
                    <h1>{coffe.title}</h1>
                    <span>{coffe.description}</span>
                  </CardDescription>
                  <CardBuy>
                    <span>
                      R$<strong>9,90</strong>
                    </span>

                    <CardBuyActions>
                      <BuyCounter>
                        <CounterButton
                          name="min"
                          onClick={(e) => {
                            handleCounterClickDown(e, coffe)
                          }}
                        >
                          <Minus size={14} weight="bold" />
                        </CounterButton>
                        <input
                          min="0"
                          name="quantity"
                          value={coffe.quantity}
                          type="number"
                        />
                        <CounterButton
                          name="plus"
                          onClick={(e) => {
                            handleCounterClickPlus(e, coffe)
                          }}
                        >
                          <Plus size={14} weight="bold" />
                        </CounterButton>
                      </BuyCounter>
                      <button
                        type="submit"
                        onClick={() => {
                          handleBuySpecificCoffe(coffe)
                        }}
                      >
                        <ShoppingCartSimple size={22} weight="fill" />
                      </button>
                    </CardBuyActions>
                  </CardBuy>
                </CoffeeCard>
              )
            })
          : coffes.map((coffe, index: number) => {
              return (
                <CoffeeCard key={index}>
                  <ImgContainerCard>
                    <img src={coffe.image} alt="" />
                  </ImgContainerCard>
                  <TagCardContainer>
                    {coffe.tags.map((tag, index) => {
                      return (
                        <TagCard key={index}>
                          <span>{tag.tag}</span>
                        </TagCard>
                      )
                    })}
                  </TagCardContainer>
                  <CardDescription>
                    <h1>{coffe.title}</h1>
                    <span>{coffe.description}</span>
                  </CardDescription>
                  <CardBuy>
                    <span>
                      R$<strong>9,90</strong>
                    </span>

                    <CardBuyActions>
                      <BuyCounter>
                        <CounterButton
                          name="min"
                          onClick={(e) => {
                            handleCounterClickDown(e, coffe)
                          }}
                        >
                          <Minus size={14} weight="bold" />
                        </CounterButton>
                        <input
                          min="0"
                          name="quantity"
                          value="0"
                          type="number"
                        />
                        <CounterButton
                          name="plus"
                          onClick={(e) => {
                            handleCounterClickPlus(e, coffe)
                          }}
                        >
                          <Plus size={14} weight="bold" />
                        </CounterButton>
                      </BuyCounter>
                      <button
                        onClick={() => {
                          handleBuySpecificCoffe(coffe)
                        }}
                      >
                        <ShoppingCartSimple size={22} weight="fill" />
                      </button>
                    </CardBuyActions>
                  </CardBuy>
                </CoffeeCard>
              )
            })}
      </CoffeeCardContainer>
    </ContainerList>
  )
}
