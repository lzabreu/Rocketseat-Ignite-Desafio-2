import {
  Container,
  DataContainer,
  IconContainer,
  ItemContainer,
  LeftContainer,
} from './styles'
import illustration from '../../assets/illustration.svg'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { defaultTheme } from '../../styles/theme/default'
import { useLocation, useNavigate } from 'react-router-dom'
import { newFormData } from '../Checkout'
import { useEffect } from 'react'

interface StateProps {
  state: {
    data: newFormData
  }
}
export function Confirmation() {
  const { state } = useLocation() as unknown as StateProps

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])
  if (!state) {
    return <></>
  }
  return (
    <Container>
      <LeftContainer>
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <p style={{ alignSelf: 'stretch' }}>
            Agora é só aguardar que logo o café chegará até você
          </p>
        </div>

        <DataContainer>
          <ItemContainer>
            <IconContainer
              style={{ background: defaultTheme['purple-medium'] }}
            >
              <MapPin
                size={16}
                weight="fill"
                color={defaultTheme['white-total']}
              />
            </IconContainer>
            <div>
              <p style={{ alignSelf: 'stretch' }}>
                Entrega em{' '}
                <strong>
                  {state.data.street}, {state.data.locationNumber}
                </strong>
              </p>
              <p style={{ alignSelf: 'stretch' }}>
                {state.data.neighborhood} - {state.data.city},{' '}
                {state.data.state}
              </p>
            </div>
          </ItemContainer>
          <ItemContainer>
            <IconContainer
              style={{ background: defaultTheme['yellow-medium'] }}
            >
              <Clock
                size={16}
                weight="fill"
                color={defaultTheme['white-total']}
              />
            </IconContainer>
            <div>
              <p style={{ alignSelf: 'stretch' }}>Previsão de entrega</p>
              <p style={{ alignSelf: 'stretch' }}>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </ItemContainer>
          <ItemContainer>
            <IconContainer style={{ background: defaultTheme['yellow-dark'] }}>
              <CurrencyDollar
                size={16}
                weight="fill"
                color={defaultTheme['white-total']}
              />
            </IconContainer>
            <div>
              <p style={{ alignSelf: 'stretch' }}>Pagamento na entrega</p>
              {state.data.credit !== '' && (
                <p style={{ alignSelf: 'stretch' }}>{state.data.credit}</p>
              )}
              {state.data.debt !== '' && (
                <p style={{ alignSelf: 'stretch' }}>{state.data.debt}</p>
              )}
              {state.data.money !== '' && (
                <p style={{ alignSelf: 'stretch' }}>{state.data.money}</p>
              )}
            </div>
          </ItemContainer>
        </DataContainer>
      </LeftContainer>
      <div>
        <img src={illustration} alt="Logotipo" width={788} height={284} />
      </div>
    </Container>
  )
}
