import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from 'src/components/Input'
import { getRules, schema, Schema } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'

// interface FormData {
//   email: string
//   password: string
//   confirm_password: string
// }

type FormData = Pick<Schema, 'email' | 'password' | 'confirm_password'>
const registerSchema = schema.pick(['email', 'password', 'confirm_password'])

export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema)
  })
  const rules = getRules(getValues)
  const onSubmit = handleSubmit(
    (data) => {
      console.log(data)
    },
    (data) => {
      const password = getValues('password')
      console.log(password)
    }
  )

  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:py-32 lg:pr-10 py-20'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng ký</div>
              <Input
                name='email'
                register={register}
                type='email'
                classname='mt-8'
                errorMessage={errors.email?.message}
                placeholder='Email'
                rules={rules.email}
              />
              {/* <div className='mt-2'>
                <input
                  type='password'
                  placeholder='Mật khẩu'
                  autoComplete='on'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm'
                  {...register('password', rules.password)}
                />
                <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errors.password?.message}</div>
              </div> */}
              <Input
                name='password'
                register={register}
                type='password'
                classname='mt-2'
                errorMessage={errors.password?.message}
                placeholder='Mật khẩu'
                rules={rules.password}
                autoComplete='on'
              />

              {/* <div className='mt-2'>
                <input
                  type='password'
                  placeholder='Xác nhận mật khẩu'
                  autoComplete='on'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm'
                  {...register('confirm_password', rules.confirm_password)}
                />
                <div className='mt-1 text-red-600 min-h-[1rem] text-sm'>{errors.confirm_password?.message}</div>
              </div> */}
              <Input
                name='confirm_password'
                register={register}
                type='password'
                classname='mt-2'
                errorMessage={errors.confirm_password?.message}
                placeholder='Mật khẩu'
                rules={rules.confirm_password}
                autoComplete='on'
              />
              <div className='mt-2'>
                <button
                  type='submit'
                  className='w-full tex-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'
                >
                  đăng ký
                </button>
              </div>
              <div className='flex items-center justify-center mt-8'>
                <span className='text-gray-400'>Bạn đã có tài khoản?</span>
                <Link className='text-red-400 ml-1' to='/login'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
