import { useState } from 'react'
import { api } from '../services/api'
import { formartePrice, formateWithDiscount } from '../utils/formatePrice'

interface IShoe {
  id: string
  name: string
  price: {
    value: number
    discount: number
    valueWithDiscount: string
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

      const responseData = (await response.data[0]) as IShoe

      responseData.price.valueWithDiscount = String(
        formateWithDiscount(
          responseData.price.discount,
          responseData.price.value,
        ).toFixed(2),
      )

      responseData.price.value = formartePrice(
        responseData.price.value,
      ) as unknown as number

      setShoe(responseData)
    } catch (error) {
      console.log(error)
    }
  }

  return { shoe, getShoe }
}
