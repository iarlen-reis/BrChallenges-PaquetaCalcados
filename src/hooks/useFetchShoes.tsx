import { useEffect, useState } from 'react'
import { api } from '../services/api'

interface IShoes {
  id: string
  name: string
  price: {
    value: number
    discount: number
  }
  soldout: boolean
  image: string
}

interface UseFeatchShoes {
  shoes: IShoes[] | null
  loading: boolean
}

export const useFetchShoes = (): UseFeatchShoes => {
  const [shoes, setShoes] = useState<IShoes[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const getShoes = async () => {
      try {
        const response = await api.get('/shoes')

        const dataResponse = await response.data

        setShoes(dataResponse as IShoes[])
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getShoes()
  }, [])

  return { shoes, loading }
}
