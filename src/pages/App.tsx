import * as Toast from '@radix-ui/react-toast'
import { type FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from '../context/AuthProvider'
import '../index.css'
import MainLayout from '../layouts/MainLayout'
import Detail from './Detail'
import Home from './Home'
import Login from './Login'
import NotFound from './NotFound'
import Register from './Register'
import Search from './Search'
import Setting from './Setting'
import Signup from './Signup'
import Top from './Top'

const App: FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Toast.Provider swipeDirection="down">
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/home" element={<Home />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/register" element={<Register />} />
              <Route path="/search" element={<Search />} />
              <Route path="/setting" element={<Setting />} />
            </Route>

            <Route index element={<Top />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Toast.Provider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
