import { ButtonProps } from '@/interfaces'

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className='px-5 py-3 text-sm font-medium mt-10 w-full text-white border border-white rounded-full '>
      {children}
    </button>
  )
}
