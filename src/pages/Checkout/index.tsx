import { Container, FormInput } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { AddressCard } from './AddressCard'
import { CreditCardInfo } from './CreditCardInfo'
import { CartConfirmation } from './CartConfirmation'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/CartContext'

const userFormValidationSchema = zod.object({
  zipcode: zod.string().min(8, 'Informe o CEP').max(9),
  street: zod.string().min(1, 'Informe a rua'),
  locationNumber: zod.string().min(1, 'Informe o número'),
  complement: zod.string().optional(),
  neighborhood: zod.string().optional(),
  city: zod.string().min(3, 'Informe a cidade'),
  state: zod.string().min(2, 'Informe o estado').max(2),
  credit: zod.string().optional(),
  debt: zod.string().optional(),
  money: zod.string().optional(),
})

export type newFormData = zod.infer<typeof userFormValidationSchema>
type ConfirmOrderFormData = newFormData

export function Checkout() {
  const confirmOrder = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(userFormValidationSchema),
  })
  const { handleSubmit } = confirmOrder

  const { cleanCartList, cartList } = useContext(CartContext)

  useEffect(() => {
    if (cartList.length === 0) {
      navigate('/')
    }
  }, [cartList])

  const navigate = useNavigate()

  function handleSendForm(data: ConfirmOrderFormData) {
    console.log('entrou')

    if (data.credit !== '' || data.debt !== '' || data.money !== '') {
      navigate('/confirmation', { state: { data } })
      cleanCartList()
    } else {
      alert('Informe o método de pagamento')
    }
  }

  return (
    <FormProvider {...confirmOrder}>
      <Container>
        <div>
          <AddressCard />
          <CreditCardInfo />
        </div>
        <FormInput onSubmit={handleSubmit(handleSendForm)}>
          <CartConfirmation />
        </FormInput>
      </Container>
    </FormProvider>
  )
}
