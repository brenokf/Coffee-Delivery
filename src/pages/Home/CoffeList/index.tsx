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
import { MarketContext } from '../../../contexts/Marketcontext'
import { useContext } from 'react'
interface CoffeListProps {
  listCoffes: Array<object>
}
export function CoffeList({ listCoffes }: CoffeListProps) {
  const {
    handleCounterClickDown,
    handleCounterClickPlus,
    handleBuySpecificCoffe,
    handleFilterTags,
  } = useContext(MarketContext)
  return (
    <ContainerList>
      <h1>Nossos Cafés</h1>
      <Filters>
        <Tag onClick={() => handleFilterTags(listCoffes, 'TRADICIONAL')}>
          <span>TRADICIONAL</span>
        </Tag>
        <Tag onClick={() => handleFilterTags(listCoffes, 'ESPECIAL')}>
          <span>ESPECIAL</span>
        </Tag>
        <Tag onClick={() => handleFilterTags(listCoffes, 'COM LEITE')}>
          <span>COM LEITE</span>
        </Tag>
        <Tag onClick={() => handleFilterTags(listCoffes, 'ALCOÓLICO')}>
          <span>ALCOÓLICO</span>
        </Tag>
        <Tag onClick={() => handleFilterTags(listCoffes, 'GELADO')}>
          <span>GELADO</span>
        </Tag>
      </Filters>
      <CoffeeCardContainer>
        {listCoffes.map((coffe: unknown, index: unknown) => {
          return (
            <CoffeeCard key={index}>
              <ImgContainerCard>
                <img src={coffe.image} alt="" />
              </ImgContainerCard>
              <TagCardContainer>
                {coffe.tags.map((tag: unknown, index: unknown) => {
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
                    <input min="0" name="quantity" value="0" type="number" />
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
        })}
      </CoffeeCardContainer>
    </ContainerList>
  )
}
