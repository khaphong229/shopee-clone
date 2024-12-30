import { type UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  classname?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
  autoComplete?: string
}

export default function Input({
  type,
  errorMessage,
  placeholder,
  classname,
  name,
  register,
  rules,
  autoComplete
}: Props) {
  return (
    <div className={classname}>
      <input
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm'
        {...register(name, rules)}
      />
      <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errorMessage}</div>
    </div>
  )
}
