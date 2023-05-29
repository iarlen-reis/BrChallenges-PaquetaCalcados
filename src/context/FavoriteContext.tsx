import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface IFavorite {
  id: string
  name: string
  price: string
  image: string
}

interface IFavoriteContext {
  favorites: IFavorite[]
  addToFavorite: (item: IFavorite) => void
}

interface IChildren {
  children: ReactNode
}

const FavoriteContext = createContext<IFavoriteContext>({
  favorites: [],
  addToFavorite: () => {},
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
    setFavorites((prev) => [...prev, item])
  }

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorite }}>
      {children}
    </FavoriteContext.Provider>
  )
}

export const useFavoriteContext = () => {
  return useContext(FavoriteContext)
}
