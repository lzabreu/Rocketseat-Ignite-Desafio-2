import { Coffee as CoffeeIcon, Package, ShoppingCart, Timer } from 'phosphor-react'
import imagem from '../../assets/Imagem.svg'
import {
  Container,
  GridContainer,
  LeftContainer,
  List,
  LogoContainer,
  RightContainer,
} from './styles'
import { defaultTheme } from '../../styles/theme/default'
import { CoffeeCard } from './components/Card'
import { coffeeJSON } from '../../assets/CoffeeList'


export function Home() {
  // const [coffeeList, setCoffeeList] = useState<Coffee[]>(coffeeJson)
  // const coffeeL:Coffee = JSON.parse(coffeeList)
  return (
    <>
      <Container>
        <LeftContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p style={{ alignSelf: 'stretch' }}>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <GridContainer>
            <span>
              <LogoContainer
                style={{ background: defaultTheme['yellow-dark'] }}
              >
                <ShoppingCart size={16} />
              </LogoContainer>
              Compra simples e segura
            </span>
            <span>
              <LogoContainer style={{ background: defaultTheme['base-text'] }}>
                <Package size={16} />
              </LogoContainer>
              Embalagem mantém o café intacto
            </span>
            <span>
              <LogoContainer
                style={{ background: defaultTheme['yellow-medium'] }}
              >
                <Timer size={16} />
              </LogoContainer>
              Entrega rápida e rastreada
            </span>
            <span>
              <LogoContainer
                style={{ background: defaultTheme['purple-medium'] }}
              >
                <CoffeeIcon size={16} />
              </LogoContainer>
              O café chega fresquinho até você
            </span>
          </GridContainer>
        </LeftContainer>
        <RightContainer>
          <img
            src={imagem}
            width={476}
            height={360}
            style={{ opacity: 0.92 }}
            alt="imagem de uma xícara de café"
          />
        </RightContainer>
      </Container>
      <h2>Nossos cafés</h2>
      <List>
        {coffeeJSON.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />
        })}
      </List>
    </>
  )
}
