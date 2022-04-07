export default {
  addToCart (state, payload) {
    state.cart.push(payload)
  },
  removeFromCart (state, payload) {
    const index = state.cart.indexOf(payload)
    if (index > -1) {
      state.cart.splice(index, 1)
    }
  },
  incrementQuantity (state, payload) {
    const index = state.cart.indexOf(payload)
    if (index > -1) {
      state.cart.forEach((item) => {
        if (item.product.id === payload.product.id) {
          item.quantity += 1
        }
      })
    }
  },
  decrementQuantity (state, payload) {
    const index = state.cart.indexOf(payload)
    if (index > -1) {
      state.cart.forEach((item) => {
        if (item.product.id === payload.product.id) {
          if (item.quantity > 1) {
            item.quantity--
            return
          }
          this.commit('cart/removeFromCart', payload)
        }
      })
    }
  }
}
