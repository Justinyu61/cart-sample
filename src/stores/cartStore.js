import { defineStore } from 'pinia'
import { useProductStore } from './productsStore'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cart: [],
  }),
  getters: {
    cartList: ({ cart }) => {
      //1. 購物車的品項資訊,整合產品資訊
      //2. 必須計算小計金額
      //3. 必須提供總金額
      const { products } = useProductStore()

      const carts = cart.map((item) => {
        //單一產品取出
        const product = products.find((pId) => pId.id === item.productId)
        return {
          ...item,
          product,
          subtotal: product.price * item.qty,
        }
      })
      const total = carts.reduce((a, b) => a + b.subtotal, 0)
      return {
        carts, //列表
        total, //總金額
      }
    },
  },
  actions: {
    addCart(productId, qty = 1) {
      //取得已經有加入過購物車的項目
      //判斷若購物車已有該項目則該項目+1,如果沒有則新增至購物車
      const currentCart = this.cart.find((item) => item.productId === productId)
      if (currentCart) {
        currentCart.qty += qty
      } else {
        this.cart.push({
          id: new Date().getTime(),
          productId,
          qty,
        })
        console.warn('this.cart', this.cart)
      }
    },
    setCartQty(id, event) {
      const currentCart = this.cart.find((item) => item.id === id)
      currentCart.qty = event.target.value * 1 //轉型
    },
    removeCartItem(pId) {
      const index = this.cart.findIndex((item) => item.id === pId)
      this.cart.splice(index, 1)
    },
  },
})
