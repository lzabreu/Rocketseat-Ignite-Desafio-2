import {
  Actions,
  AddToCart,
  Buy,
  CardContainer,
  Tag,
  TagContainer,
} from './styles'

import { ShoppingCartSimple } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/theme/default'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { QuantityCounter } from '../../../../components/QuantityCounter'
import { Coffee } from '../../../../types/Coffee'
import { Cart } from '../../../../types/Cart'

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { addToCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext)
  const [quantity, setQuantity] = useState(0)

  function handleIncrease() {
    setQuantity((state) => state + 1)
    const itemtosend: Cart = {
      ...coffee,
      quantity: quantity,
    }
    increaseQuantity(itemtosend)
  }
  function handleDecrease() {
    setQuantity((state) => state - 1)
    //decreaseQuantity(cartItem)
  }

  function handleAddToCart() {
    const itemToAdd = {
      ...coffee,
      quantity,
    }
    if (quantity > 0) {
      addToCart(itemToAdd)
    }
  }

  return (
    <CardContainer>
      <div style={{ marginTop: -20, marginBottom: 12 }}>
        <img src={coffee.image} alt="" />
      </div>
      <TagContainer>
        {coffee.tags.map((tag, index) => {
          return <Tag key={index}>{tag}</Tag>
        })}
      </TagContainer>

      <h3 style={{ marginBottom: 8 }}>{coffee.name}</h3>
      <p style={{ width: 216 }}>{coffee.description}</p>
      <Buy>
        <span>
          R$
          <h1 style={{ fontSize: 24, color: defaultTheme['base-text'] }}>
            {coffee.price.toFixed(2).replace('.', ',')}
          </h1>
        </span>
        <Actions>
          <QuantityCounter
            quantity={quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />

          <AddToCart onClick={handleAddToCart}>
            <ShoppingCartSimple
              size={20}
              weight="fill"
              color={defaultTheme['base-card']}
            />
          </AddToCart>
        </Actions>
      </Buy>
    </CardContainer>
  )
}
