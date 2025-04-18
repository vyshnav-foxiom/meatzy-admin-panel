import { useState } from 'react'
import Layout from './connection/Layout'
import Dashboard from './pages/private/Dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/public/PageNotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
