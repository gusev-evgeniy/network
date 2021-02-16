import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from './MyDataReducer'
import { getMyData } from '../../Selectors/Selectors'
import { Redirect } from 'react-router-dom'

type FormData = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

const Auth: React.FC = () => {
  const myData = useSelector(getMyData)

  const dispatch = useDispatch()

  const { handleSubmit, register } = useForm<FormData>()

  const onSubmit = handleSubmit((data) => {
    const { email, password, rememberMe, captcha } = data

    dispatch(signIn(email, password, rememberMe, captcha))
  })

  const showCaptcha = () => {
    return (
      <div>
        <img src={myData.captcha} alt='captcha' />
        <input type='text' name='captcha' ref={register} />
      </div>
    )
  }

  if (myData.isAuth) return <Redirect to='/users' />

  return (
    <form onSubmit={onSubmit} className='loginForm'>
      <div className='input-field'>
        <input
          type='email'
          name='email'
          className={myData.error ? 'invalid' : ''}
          ref={register({ required: true })}
          autoFocus={true}
          placeholder='Email'
          defaultValue='free@samuraijs.com'
        />
      </div>
      <div className='input-field'>
        <input
          type='password'
          className={myData.error ? 'invalid' : ''}
          name='password'
          ref={register({ required: true })}
          placeholder='Password'
          autoComplete='off'
          defaultValue='free'
        />
        <span className='helper-text' data-error={myData.error} />
      </div>
      <div>
        <label>
          <input
            type='checkbox'
            className='filled-in'
            name='rememberMe'
            ref={register}
          />
          <span>Remember Me</span>
        </label>
      </div>
      {myData.captcha && showCaptcha()}
      <button className='btn'>Submit</button>
    </form>
  )
}

export default Auth
