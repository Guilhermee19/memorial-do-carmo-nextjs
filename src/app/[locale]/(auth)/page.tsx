'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function Home() {
  const animals = [
    { id: 1, name: 'Cachorro', breed: 'Golden' },
    { id: 2, name: 'Gato', breed: 'Libiano' },
    { id: 3, name: 'Girafa', breed: 'Libiano' },
    { id: 4, name: 'Zebra', breed: 'Libiano' },
    { id: 5, name: 'Elefante', breed: 'Libiano' },
    { id: 6, name: 'Tigre', breed: 'Libiano' },
    { id: 7, name: 'Leão', breed: 'Libiano' },
  ]

  const validationSchema = z.object({
    autocomplete: z.number(), // Aqui você pode ajustar conforme necessário
  })

  type FormData = z.infer<typeof validationSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  })

  const handleAutoCompleteChange = (selectedValue: any) => {
    setValue('autocomplete', selectedValue)
  }

  return (
    <main className="p-4">
      {/* <header className="flex justify-center">
        <h1 className="text-2xl fon">Apresentação dos componentes</h1>
      </header> */}
      {/* <div className="size-full">
        <div className="size-full   flex-col items-center justify-center">
          <h1 className="font-bold">Autocomplete</h1>
          <AutoComplete
            label="Animal"
            placeholder="Selecione um animal"
            array={animals}
            displayKey="name"
            valueKey="id"
            // startContentIcon={<DogIcon className="text-xl" />}
            onSelect={handleAutoCompleteChange} // Passa a função para lidar com a seleção
          />
        </div>
      </div> */}
    </main>
  )
}
