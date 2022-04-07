export default {
  addToCartOrIncrement (state, payload) {
    const currentItem = state.cart.find((item) => {
      return item.product.id === payload.product.id &&
             item.product.selectedSwitch === payload.product.selectedSwitch
    })
    if (currentItem) {
      state.cart[state.cart.indexOf(currentItem)].quantity++
    } else {
      state.cart.push(payload)
    }
  },
  removeFromCart (state, payload) {
    const index = state.cart.indexOf(payload)
    if (index > -1) {
      state.cart.splice(index, 1)
    }
  },
  decrementQuantity (state, payload) {
    const index = state.cart.indexOf(payload)
    if (index > -1) {
      const itemInCart = state.cart[index]
      itemInCart.quantity > 1 ? itemInCart.quantity-- : this.commit('cart/removeFromCart', payload)
    } else {
      state.cart.push(payload)
    }
  }
}
