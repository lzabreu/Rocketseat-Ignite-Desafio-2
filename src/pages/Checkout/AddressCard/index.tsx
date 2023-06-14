import { defaultTheme } from '../../../styles/theme/default'
import {
  Button,
  ContainerLeft,
  ErrorMessage,
  FieldContainer,
  InputContainer,
  Left,
  OrderTitle,
} from './styles'
import { MapPinLine } from 'phosphor-react'
import { getAddress } from 'address-br'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

interface ErrorType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressCard() {
  const { register, formState } = useFormContext()
  const { errors } = formState as ErrorType

  const [zipcode, setZipcode] = useState('')

  const { setValue } = useFormContext()

  async function findAddress(zipcode: string) {
    if (zipcode.length === 8 || zipcode.length === 9) {
      const address = await getAddress(zipcode.trim())
      try {
        setValue('street', address.rua)
        setValue('neighborhood', address.bairro)
        setValue('city', address.cidade)
        setValue('state', address.estado)
        setValue('locationNumber', '')
        setValue('complement', '')
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <ContainerLeft>
      <h3>Complete seu pedido</h3>
      <Left>
        <OrderTitle>
          <MapPinLine size={22} color={defaultTheme['yellow-dark']} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>Endereço de entrega</span>
            <span style={{ fontSize: 14 }}>
              Informe o endereço onde deseja receber seu pedido
            </span>
          </div>
        </OrderTitle>
        <InputContainer>
          <div>
            <FieldContainer>
              <div>
                <input
                  type="text"
                  placeholder="CEP"
                  style={{ width: 384 }}
                  {...register('zipcode')}
                  onChange={(e) => setZipcode(e.target.value)}
                />
                <Button onClick={() => findAddress(zipcode)}>Buscar</Button>
              </div>
              {errors.zipcode?.message && (
                <ErrorMessage>{errors.zipcode?.message}</ErrorMessage>
              )}
            </FieldContainer>
          </div>
          <FieldContainer>
            <input disabled type="text" placeholder="RUA" {...register('street')} />
            
          </FieldContainer>
          <div>
            <FieldContainer>
              <div style={{ width: 560 }}>
                <input
                  type="text"
                  placeholder="NÚMERO"
                  style={{ width: 200 }}
                  {...register('locationNumber')}
                />
                <input
                  type="text"
                  placeholder="COMPLEMENTO"
                  style={{ flex: 1 }}
                  {...register('complement')}
                />
              </div>

              {errors.locationNumber?.message && (
                <ErrorMessage>{errors.locationNumber?.message}</ErrorMessage>
              )}
            </FieldContainer>
          </div>
          <div>
            <input
            disabled
              type="text"
              placeholder="BAIRRO"
              style={{ width: 200 }}
              {...register('neighborhood')}
            />
            <input
            disabled
              type="text"
              placeholder='CIDADE'
              style={{ flex: 1 }}
              {...register('city')}
            />
            <input
            disabled
              type="text"
              placeholder='UF'
              style={{ width: 60 }}
              {...register('state')}
            />
          </div>
        </InputContainer>
      </Left>
    </ContainerLeft>
  )
}
