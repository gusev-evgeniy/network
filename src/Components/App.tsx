import React, { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Navbar } from './Navbar/Navbar'
import Auth from './Auth/Auth'
import Profile from './Profile/Profile'
import { Users } from './Users/Users'
import { requestMyData } from './Auth/MyDataReducer'
import { getInitialInfo } from '../Selectors/Selectors'
import { useDispatch, useSelector } from 'react-redux'

export const App: React.FC = () => {
  const isInitial = useSelector(getInitialInfo)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestMyData())
  }, [dispatch])

  if (!isInitial) {
    return <div className='container center-align content'>loading...</div>
  }

  return (
    <BrowserRouter>
      <Navbar />
      <div className='container center-align content'>
        <Route path='/auth'>
          <Auth />
        </Route>
        <Route path='/users'>
          <Users />
        </Route>
        <Route path='/profile/:userId?'>
          <Profile />
        </Route>
      </div>
    </BrowserRouter>
  )
}
