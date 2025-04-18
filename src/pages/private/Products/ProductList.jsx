import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { BaseUrl } from '@/constants/apiUrls'

const ProductList = () => {


  const fetchProducts = axios.get(BaseUrl + 'admin/products')
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts,
  })
  console.log("data", data)

  return (
    <div>ProductList</div>
  )
}

export default ProductList