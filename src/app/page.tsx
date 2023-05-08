import { ReactNode } from 'react'

interface Props {
  id: string
  name: string
  label: string
  type: string
  placeholder: string
}

interface ButtonProps {
  children: ReactNode
}

const Input = ({ id, name, label, type, placeholder }: Props) => {
  return (
    <fieldset>
      <label
        className='block my-2 text-sm font-medium text-slate-100'
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className=' border text-sm rounded-md block w-full p-2.5 bg-white/5 border-gray-600 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 '
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </fieldset>
  )
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className='px-5 py-3 text-sm font-medium text-white border border-white rounded-lg '>
      {children}
    </button>
  )
}

export default function Home () {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen py-24'>
      <h2 className='text-3xl font-bold tracking-tight text-slate-100 test-center mb-4 '>
        Contacta conmigo
      </h2>
      <form className='space-y-4'>
        <Input
          name='email'
          id='email'
          label='Tu Email'
          type='email'
          placeholder='miemail@gmail.com'
        />

        <Input
          name='name'
          id='name'
          label='Tu Nombre'
          type='email'
          placeholder='Epsaind Dev'
        />
        <Input
          name='message'
          id='message'
          label='Tu Mensaje'
          type='text'
          placeholder='Mensaje que enviaré'
        />

        <Button>Enviar Mensaje</Button>
      </form>
    </main>
  )
}
