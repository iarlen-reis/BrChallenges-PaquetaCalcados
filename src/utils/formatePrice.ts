export const formartePrice = (price: number) => {
  const formattedPrice = price.toFixed(2)
  return `${formattedPrice
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`
}

export const formateDiscount = (discount: number) => {
  return discount * 100
}

export const formateWithDiscount = (discount: number, price: number) => {
  const discountExists = formateDiscount(discount)

  const priceWithDiscount = price - (price * discountExists) / 100

  if (discount) return Number(priceWithDiscount.toFixed(2))

  return Number(price.toFixed(2))
}

export const paceleWithDiscount = (price: string) => {
  const parcele = Number(price) / 9

  return parcele.toFixed(2)
}
