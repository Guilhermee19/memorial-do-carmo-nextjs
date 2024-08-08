'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Image } from '@nextui-org/react'
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
    <main className="w-full p-0 mt-0">
      <Image
        src="/banner/Banner001.jpg"
        alt="Landscape picture"
        className="object-contain w-full"
        width={1440}
        height={800}
      />

      <header className="flex justify-center mb-3">
        <h1 className="max-w-3xl text-center leading-normal font-bold font-open_sans text-[#015b7d] text-4xl">Entenda o que você precisa fazer caso tenha perdido alguém</h1>
      </header>

      <div className='w-72 bg-[#006c94] h-[2px] m-auto'></div>

      <div className='max-w-[90%] m-auto mt-12 flex justify-between items-start gap-4'>
        <div>
          <h4 className='text-center text-2xl font-semibold text-[#006c94]'> Sepultar ou cremar? </h4>
        </div>

        <div>
          <h4 className='text-center text-2xl font-semibold text-[#006c94]'> Contratar serviço funerário </h4>
        </div>

        <div>
          <h4 className='text-center text-2xl font-semibold text-[#006c94]'> Organização de velório </h4>
        </div>
      </div>
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
