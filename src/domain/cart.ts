import type { Product } from './product'

export type CartItem = {
  product: Product
  quantity: number
}
// type guard for CartItem
export const isCartItem = (item: any): item is CartItem => item.quantity !== undefined

export type Cart = CartItem[]
