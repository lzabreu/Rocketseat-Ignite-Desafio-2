import { Minus, Plus } from 'phosphor-react'
import { Quantity } from './styles'
import { defaultTheme } from '../../styles/theme/default'

interface Props {
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}

export function QuantityCounter({ onIncrease, onDecrease, quantity }: Props) {
  return (
    <Quantity>
      <button disabled={quantity <=0} onClick={onDecrease}>
        <Minus size={14} weight="bold" color={defaultTheme['purple-medium']} />
      </button>
      <span>{quantity}</span>
      <button onClick={onIncrease}>
        <Plus size={14} weight="bold" color={defaultTheme['purple-medium']} />
      </button>
    </Quantity>
  )
}
