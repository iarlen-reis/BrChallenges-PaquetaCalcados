import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

interface ICart {
  id: string
  name: string
  price: string
  image: string
  shoeSize: number
}

interface ICartContext {
  cart: ICart[]
  addToCart: (item: ICart) => void
}

interface IChildren {
  children: ReactNode
}

export const CartContext = createContext<ICartContext>({
  cart: [],
  addToCart: () => {},
})

export const CartProvider = ({ children }: IChildren) => {
  const [cart, setCart] = useState<ICart[]>(
    localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart')!)
      : [],
  )

  console.log(cart)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (item: ICart) => {
    setCart((prevItems) => [...prevItems, item])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
