import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/Logo.svg'
import { defaultTheme } from '../../styles/theme/default'
import {
  Cart,
  HeaderContainer,
  Location,
  LocationCart,
  TotalItems,
} from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'

export function Header() {
  const { totalItems } = useContext(CartContext)
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="Logotipo" />
      </Link>
      <LocationCart>
        <Location>
          <MapPin
            size={22}
            weight="fill"
            color={defaultTheme['purple-medium']}
          />
          <span>São Paulo, SP</span>
        </Location>
        <Link to="/checkout">
          <Cart>
            <ShoppingCart
              size={22}
              weight="fill"
              color={defaultTheme['yellow-dark']}
            />
            {totalItems !== 0 && <TotalItems>{totalItems}</TotalItems>}
          </Cart>
        </Link>
      </LocationCart>
    </HeaderContainer>
  )
}
