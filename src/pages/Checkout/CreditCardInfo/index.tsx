import { useFormContext } from 'react-hook-form'
import { defaultTheme } from '../../../styles/theme/default'
import { ContainerLeft, Left, OrderTitle, Payment, PaymentType } from './styles'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

export function CreditCardInfo() {
  function selectPayment(type: string) {
    setValue('credit', '')
    setValue('debt', '')
    setValue('money', '')
    switch (type) {
      case 'credit':
        setValue('credit', 'Cartão de crédito')
        break
      case 'debt':
        setValue('debt', 'Cartão de débito')
        break
      case 'money':
        setValue('money', 'Dinheiro')
        break
      default:
        break
    }
  }
  const { register, setValue } = useFormContext()
  return (
    <ContainerLeft>
      <Left>
        <OrderTitle>
          <CurrencyDollar size={22} color={defaultTheme['yellow-dark']} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>Pagamento</span>
            <span style={{ fontSize: 14 }}>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </OrderTitle>
        <Payment>
          <PaymentType
            onClick={() => selectPayment('credit')}
            {...register('credit')}
          >
            <CreditCard size={16} color={defaultTheme['purple-medium']} />
            Cartão de Crédito
          </PaymentType>
          <PaymentType
            onClick={() => selectPayment('debt')}
            {...register('debt')}
          >
            <Bank size={16} color={defaultTheme['purple-medium']} />
            Cartão de débito
          </PaymentType>
          <PaymentType
            onClick={() => selectPayment('money')}
            {...register('money')}
          >
            <Money size={16} color={defaultTheme['purple-medium']} />
            Dinheiro
          </PaymentType>
        </Payment>
      </Left>
    </ContainerLeft>
  )
}
