export default () => ({
  cart: [
    {
      product: {
        id: 1,
        category: 'Клавиатура',
        name: 'Shine 7 Blackout',
        company: 'Ducky',
        switches: ['Brown', 'Blue', 'Red', 'Clear', 'Silent Red', 'Speed Silver', 'Black'],
        selectedSwitch: 'Clear',
        price: 9999,
        image: require('@/assets/images/product/1.png')
      },
      quantity: 1
    }
  ]
})
