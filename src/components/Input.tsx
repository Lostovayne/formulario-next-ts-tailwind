import { Props } from '@/interfaces'

export const Input = ({ id, name, label, type, placeholder }: Props) => {
  return (
    <fieldset className=''>
      <label
        className='block mb-2 mt-6 text-sm font-medium text-slate-100'
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className='border text-sm rounded-md block w-full p-2.5 bg-white/5 border-gray-600
          placeholder-gray-600 focus:outline-none focus:border-sky-500 focus:ring-sky-500 '
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </fieldset>
  )
}
