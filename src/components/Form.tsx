'use client'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { toast } from 'sonner'

const Form = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const { email, name, message } = Object.fromEntries(formData.entries())

    // llamada a la api

    fetch('/api/kv-send-message', {
      method: 'POST',
      body: JSON.stringify({ email, name, message }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        toast.success('Mensaje enviado con éxito')
        // form reset
      })
      .catch(() => {
        toast.error('Hubo un error al enviar el mensaje')
      })
  }

  return (
    <form
      className='p-8 border  border-white/10 rounded min-w-[400px]'
      onSubmit={handleSubmit}
    >
      <Input
        name='email'
        id='email'
        label='Tu Email'
        type='email'
        placeholder='example@gmail.com'
      />

      <Input
        name='name'
        id='name'
        label='Tu Nombre'
        type='text'
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
  )
}

export default Form
