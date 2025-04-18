import { useState } from 'react'
import Layout from './connection/Layout'
import Dashboard from './pages/private/Dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/public/PageNotFound'
import ProductList from './pages/private/Products/ProductList'
import VendorsList from './pages/private/Vendors/VendorsList'
import UserList from './pages/private/Users/UserList'
import { ROUTE } from './constants/path'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path={ROUTE.BASEPATH} element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path={ROUTE.PRODUCT} element={<ProductList />} />
          <Route path={ROUTE.VENDOR} element={<VendorsList />} />
          <Route path={ROUTE.USER} element={<UserList />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
