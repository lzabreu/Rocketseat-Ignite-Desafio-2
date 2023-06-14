import { useContext } from 'react'
import { Button, CoffeeCardDiv, Confirm, ContainerRight, Right, Total } from './styles'
import { CartContext } from '../../../contexts/CartContext'
import { CoffeeCard } from './CoffeeCard'

const DELIVERY = 3.5

export function CartConfirmation() {
  const { cartList, itemsValue } = useContext(CartContext)
  return (
    <ContainerRight>
      <h3>Cafés selecionados</h3>
      <Right>
        <CoffeeCardDiv>
          {cartList.map((item) => (
            <CoffeeCard key={item.id} item={item} />
          ))}
        </CoffeeCardDiv>
        <Confirm>
          <Total>
            <p>
              Total de itens
              <span>{`R$ ${itemsValue.toFixed(2).replace('.', ',')}`}</span>
            </p>
            <p>
              Entrega<span>R$ 3,50</span>
            </p>
            <div>
              <h3>Total</h3>
              <h3>{`R$ ${(itemsValue + DELIVERY)
                .toFixed(2)
                .replace('.', ',')}`}</h3>
            </div>
          </Total>
        </Confirm>
        <Button type="submit" disabled={cartList.length === 0}>
          CONFIRMAR PEDIDO
        </Button>
      </Right>
    </ContainerRight>
  )
}
