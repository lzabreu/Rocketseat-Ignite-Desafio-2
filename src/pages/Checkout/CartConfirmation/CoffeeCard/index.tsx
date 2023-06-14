import { Actions, Buy, CardContainer, Divider, RemoveFromCart } from './styles'
import { Trash } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/theme/default'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { Cart } from '../../../../types/Cart'
import { QuantityCounter } from '../../../../components/QuantityCounter'

interface Props {
  item: Cart
}

export function CoffeeCard({ item }: Props) {
  const { deleteFromCart } = useContext(CartContext)
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext)

  function handleIncrease() {
    increaseQuantity(item)
  }
  function handleDecrease() {
    decreaseQuantity(item)
  }
  function handleDeleteItem() {
    deleteFromCart(item)
  }

  return (
    <>
      <CardContainer>
        <div>
          <img src={item.image} alt="" width={64} height={64} />
        </div>
        <Buy>
          <span>{item.name}</span>
          <Actions>
            <QuantityCounter
              quantity={item.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <RemoveFromCart onClick={handleDeleteItem}>
              <Trash size={16} color={defaultTheme['purple-medium']} />
              <span>REMOVER</span>
            </RemoveFromCart>
          </Actions>
        </Buy>
        <span style={{width:80}}>
          R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
        </span>
      </CardContainer>
      <Divider />
    </>
  )
}
