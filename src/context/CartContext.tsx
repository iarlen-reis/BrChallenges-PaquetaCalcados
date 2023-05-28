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
  amount: number
  productCode: string
}

interface ICartContext {
  cart: ICart[]
  addToCart: (item: ICart) => void
  removeItemCart: (id: string, shoeSize: number) => void
}

interface IChildren {
  children: ReactNode
}

export const CartContext = createContext<ICartContext>({
  cart: [],
  addToCart: () => {},
  removeItemCart: () => {},
})

export const CartProvider = ({ children }: IChildren) => {
  const [cart, setCart] = useState<ICart[]>(
    localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart')!)
      : [],
  )

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (item: ICart) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) =>
        cartItem.id === item.id && cartItem.shoeSize === item.shoeSize,
    )

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart[existingItemIndex].amount += 1
      setCart(updatedCart)
      return
    }
    setCart((prevItems) => [...prevItems, item])
  }

  const removeItemCart = (id: string, shoeSize: number) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === id && cartItem.shoeSize === shoeSize,
    )

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart]
      const item = updatedCart[existingItemIndex]

      if (item.amount > 1) {
        item.amount -= 1
      } else {
        updatedCart.splice(existingItemIndex, 1)
      }

      setCart(updatedCart)
    }
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItemCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
