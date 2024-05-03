import { Intro } from './Intro/index'
import { CoffeList } from './CoffeList/index'
import imgExpressoTrad from '../../assets/coffees/Type=Expresso.svg'
import imgExpressoAme from '../../assets/coffees/Type=Americano.svg'
import imgExpressoCrem from '../../assets/coffees/Type=Expresso Cremoso.svg'
import imgExpressoGelado from '../../assets/coffees/Type=Café Gelado.svg'
import imgCafeComLeite from '../../assets/coffees/Type=Café com Leite.svg'
import imgLatte from '../../assets/coffees/Type=Latte.svg'
import imgCapuccino from '../../assets/coffees/Type=Capuccino.svg'
import imgMacchiato from '../../assets/coffees/Type=Macchiato.svg'
import imgMochaccino from '../../assets/coffees/Type=Mochaccino.svg'
import imgChocolateQuente from '../../assets/coffees/Type=Chocolate Quente.svg'
import imgCubano from '../../assets/coffees/Type=Cubano.svg'
import imgHavaiano from '../../assets/coffees/Type=Havaiano.svg'
import imgÁrabe from '../../assets/coffees/Type=Arabe.svg'
import imgIrlandês from '../../assets/coffees/Type=Irlandês.svg'
export function Home() {
  const listCoffes = [
    {
      id: 1,
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      image: imgExpressoTrad,
      price: 20,
      quantity: 0,
      tags: [{ tag: 'TRADICIONAL' }],
    },
    {
      Id: 2,
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      image: imgExpressoAme,
      price: 20,
      quantity: 0,
      tags: [{ tag: 'TRADICIONAL' }],
    },
    {
      Id: 3,
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      image: imgExpressoCrem,
      price: 20,
      quantity: 0,
      tags: [{ tag: 'TRADICIONAL' }],
    },
    {
      Id: 4,
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      image: imgExpressoGelado,
      price: 20,
      quantity: 0,
      tags: [{ tag: 'TRADICIONAL' }, { tag: 'GELADO' }],
    },
    {
      Id: 5,
      title: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      image: imgCafeComLeite,
      price: 20,
      quantity: 0,
      tags: [{ tag: 'TRADICIONAL' }, { tag: 'COM LEITE' }],
    },
    {
      Id: 6,
      title: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      image: imgLatte,
      price: 20,
      quantity: 0,
      tags: [{ tag: 'TRADICIONAL' }, { tag: 'COM LEITE' }],
    },
    {
      Id: 7,
      title: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      image: imgCapuccino,
      price: 20,
      quantity: 0,
      tags: [{ tag: 'TRADICIONAL' }, { tag: 'COM LEITE' }],
    },
    {
      Id: 8,
      title: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      image: imgMacchiato,
      price: 20,
      quantity: 0,
      tags: [{ tag: 'TRADICIONAL' }, { tag: 'COM LEITE' }],
    },
    {
      Id: 9,
      title: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      image: imgMochaccino,
      price: 20,
      quantity: 0,
      tags: [{ tag: 'TRADICIONAL' }, { tag: 'COM LEITE' }],
    },
    {
      Id: 10,
      title: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      image: imgChocolateQuente,
      price: 20,
      quantity: 0,
      tags: [{ tag: 'ESPECIAL' }, { tag: 'COM LEITE' }],
    },
    {
      Id: 11,
      title: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      image: imgCubano,
      price: 20,
      quantity: 0,
      tags: [{ tag: 'ESPECIAL' }, { tag: 'ALCOÓLICO' }, { tag: 'GELADO' }],
    },
    {
      Id: 12,
      title: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      image: imgHavaiano,
      price: 20,
      quantity: 0,
      tags: [{ tag: 'ESPECIAL' }],
    },
    {
      Id: 13,
      title: 'Árabe',
      description: 'O tradicional café feito com água quente e grãos moídos',
      image: imgÁrabe,
      price: 20,
      quantity: 0,
      tags: [{ tag: 'ESPECIAL' }],
    },
    {
      Id: 14,
      title: 'Irlandês',
      description: 'O tradicional café feito com água quente e grãos moídos',
      image: imgIrlandês,
      price: 20,
      quantity: 0,
      tags: [{ tag: 'ESPECIAL' }, { tag: 'ALCOÓLICO' }],
    },
  ]
  return (
    <>
      <Intro />
      <CoffeList listCoffes={listCoffes} />
    </>
  )
}
