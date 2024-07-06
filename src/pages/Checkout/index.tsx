import { FormProvider, useForm } from 'react-hook-form'
import { CoffeeCard } from './CoffeCard'
import { Frame } from './Frame/index'
import { Container } from './styles'
import { MarketContext } from '../../contexts/Marketcontext'
import { useContext } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

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

  const { handleSubmit, watch, reset } = newUserAndressForm
  const handleSubmitUserAndress = (data: UserAndressFormData) => {
    console.log(data)
    submitOrder(data)
  }
  const cep = watch('cep')
  const isSubmitDisabled = !cep
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
