import { useEffect, useState } from 'react'

interface ICart {
  id: string
  name: string
  price: string
  image: string
  shoeSize: number
}

export const useSetLocalStorage = () => {
  const [cartSaved, setCartSaved] = useState<ICart[]>(
    localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart')!)
      : [],
  )

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartSaved))
  }, [cartSaved])

  const setCartLocalStorage = (cart: ICart) => {
    setCartSaved((prev) => [...prev, cart])
  }

  return { setCartLocalStorage, cartSaved }
}
