export const formartePrice = (price: number) => {
  const formattedPrice = price.toFixed(2)
  return `${formattedPrice
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`
}
