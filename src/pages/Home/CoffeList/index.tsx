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
  StyledCartButton,
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
        {tagFilterExist.map((tag, index) => (
          <Tag key={index} onClick={() => handleFilterTags(listCoffes, tag)}>
            <a>{tag}</a>
          </Tag>
        ))}
      </Filters>
      <CoffeeCardContainer>
        {(coffes.length === 0 ? listCoffes : coffes).map(
          (coffe, index: number) => (
            <CoffeeCard key={index}>
              <ImgContainerCard>
                <img src={coffe.image} alt="" />
              </ImgContainerCard>
              <TagCardContainer>
                {coffe.tags.map((tag, idx) => (
                  <TagCard key={idx}>
                    <span>{tag.tag}</span>
                  </TagCard>
                ))}
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
                      value={coffe.quantity ?? 0}
                      type="number"
                      readOnly
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
                  <StyledCartButton
                    type="button"
                    onClick={() => {
                      handleBuySpecificCoffe(coffe)
                    }}
                  >
                    <ShoppingCartSimple size={22} weight="fill" />
                  </StyledCartButton>
                </CardBuyActions>
              </CardBuy>
            </CoffeeCard>
          ),
        )}
      </CoffeeCardContainer>
    </ContainerList>
  )
}
