import Form from '@/components/Form'

export default function Home () {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen py-24 space-y-6'>
      <h2 className='text-3xl font-bold tracking-tight text-slate-100 test-center mb-4 '>
        Contacta conmigo
      </h2>

      <Form />
    </main>
  )
}
