import { useState } from 'react'
import { api } from '../services/api'

interface IShoe {
  id: string
  name: string
  price: {
    value: number
    discount: number
  }
  soldout: boolean
  image: string
  description: string
}

interface IUseFetchShoe {
  shoe: IShoe | null
  getShoe: (id: string) => void
}

export const useFetchShoe = (): IUseFetchShoe => {
  const [shoe, setShoe] = useState<IShoe | null>(null)

  const getShoe = async (id: string) => {
    try {
      const response = await api.get(`/shoe/${id}`)

      const responseData = await response.data

      setShoe(responseData[0] as IShoe)
    } catch (error) {
      console.log(error)
    }
  }

  return { shoe, getShoe }
}
