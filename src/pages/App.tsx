import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Top from './Top'
import Detail from './Detail'
import Home from './Home'
import Login from './Login'
import NotFound from './NotFound'
import Register from './Register'
import Sample from './Sample'
import Search from './Search'
import Setting from './Setting'
import '../index.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route path="/setting" element={<Setting />} />

          {/* TODO: デプロイ前に消す */}
          <Route path="/sample" element={<Sample />} />
        </Route>

        <Route index element={<Top />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
