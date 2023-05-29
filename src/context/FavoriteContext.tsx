import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { toast } from 'react-toastify'

interface IFavorite {
  id: string
  name: string
  price: string
  image: string
}

interface IFavoriteContext {
  favorites: IFavorite[]
  addToFavorite: (item: IFavorite) => void
  removeToFavorite: (id: string) => void
}

interface IChildren {
  children: ReactNode
}

const FavoriteContext = createContext<IFavoriteContext>({
  favorites: [],
  addToFavorite: () => {},
  removeToFavorite: () => {},
})

export const FavoriteProvider = ({ children }: IChildren) => {
  const [favorites, setFavorites] = useState<IFavorite[]>(
    localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites')!)
      : [],
  )

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorite = (item: IFavorite) => {
    const itemExists = favorites.find((shoe) => shoe.id === item.id)

    if (itemExists) {
      return toast.error('Produto já foi adicionado nos favoritos.')
    }

    setFavorites((prev) => [...prev, item])
    toast.success('Produto adicionado ao favorito com sucesso!')
  }

  const removeToFavorite = (id: string) => {
    const filtered = favorites.filter((item) => item.id !== id)

    setFavorites(filtered)
    toast.success('Produto removido com sucesso!')
  }

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorite, removeToFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}

export const useFavoriteContext = () => {
  return useContext(FavoriteContext)
}
