import { FormProvider, useForm } from 'react-hook-form'
import { CoffeeCard } from './CoffeCard'
import { Frame } from './Frame/index'
import { Container } from './styles'
import { MarketContext } from '../../contexts/Marketcontext'
import { useContext } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'

const newUserAndressFormSchema = z.object({
  cep: z
    .string()
    .min(9, 'Informe um CEP válido')
    .max(9, 'Informe um CEP válido'),
  streetName: z.string().min(1, 'Informe o nome da rua'),
  houseNumber: z.number().min(1, 'Informe o numero da casa'),
  complementAddress: z.string().optional(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  cityName: z.string().min(1, 'Informe a cidade'),
  uf: z.string().min(2, 'Informe a UF').max(2, 'UF inválida'),
})

type UserAndressFormData = z.infer<typeof newUserAndressFormSchema>

export function Checkout() {
  const { submitOrder } = useContext(MarketContext)
  const navigate = useNavigate()
  const newUserAndressForm = useForm<UserAndressFormData>({
    resolver: zodResolver(newUserAndressFormSchema),
    defaultValues: {
      cep: '',
      streetName: '',
      houseNumber: 0,
      complementAddress: '',
      neighborhood: '',
      cityName: '',
      uf: '',
    },
  })

  const { handleSubmit, watch, trigger, formState } = newUserAndressForm
  const handleSubmitUserAndress = async (data: UserAndressFormData) => {
    // Validação extra para garantir que todos os campos obrigatórios estejam preenchidos
    const valid = await trigger()
    if (!valid) {
      alert('Por favor, preencha todos os campos obrigatórios corretamente!')
      return
    }
    submitOrder(data)
    navigate('/success')
  }
  const cep = watch('cep')
  const isSubmitDisabled = !cep || formState.isSubmitting
  return (
    <Container>
      <form onSubmit={handleSubmit(handleSubmitUserAndress)} action="">
        <FormProvider {...newUserAndressForm}>
          <Frame />
        </FormProvider>
        <CoffeeCard isSubmitDisabled={isSubmitDisabled} />
      </form>
    </Container>
  )
}
