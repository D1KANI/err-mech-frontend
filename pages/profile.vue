<template>
  <section class="profile">
    <div class="container">
      <h1>Профиль покупателя</h1>
      <h2>Покупатель Покупательский</h2>
      <div class="profile-box">
        <div class="profile-data">
          <h3>Ваши данные</h3>
          <div class="profile-data__flex">
            <div class="input-wrapper">
              <div class="input-label">
                Логин
              </div>
              <input type="text" class="input profile__input" :placeholder="userData.login || 'Ваш логин'">
            </div>
            <div class="input-wrapper">
              <div class="input-label">
                Телефон
              </div>
              <input type="text" class="input profile__input" :placeholder="userData.tel || 'Ваш телефон'">
            </div>
            <div class="input-wrapper">
              <div class="input-label">
                Имя
              </div>
              <input type="text" class="input profile__input" :placeholder="userData.name || 'Ваше имя'">
            </div>
            <div class="input-wrapper">
              <div class="input-label">
                Фамилия
              </div>
              <input type="text" class="input profile__input" :placeholder="userData.surname || 'Ваша фамилия'">
            </div>
            <div class="input-wrapper _textarea">
              <div class="input-label">
                Адрес
              </div>
              <textarea
                rows="2"
                class="input profile__textarea"
                :placeholder="userData.address || 'Ваш адрес доставки'"
                resize=""
              />
            </div>
          </div>
        </div>
        <ProfileOrderList
          :orders="orders"
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ProfilePage',
  data () {
    return {
      orders: [
        {
          orderId: 1,
          products: [
            {
              title: 'Vortex Tab 75',
              slug: 'vortex-tab-75',
              count: 5,
              image: require('@/assets/images/product/1.png'),
              price: 12290
            },
            {
              title: 'Vortex Tab 75',
              slug: 'vortex-tab-75',
              count: 3,
              image: require('@/assets/images/product/1.png'),
              price: 12290
            }
          ]
        },
        {
          orderId: 2,
          products: [
            {
              title: 'Vortex Tab 75',
              slug: 'vortex-tab-75',
              count: 1,
              image: require('@/assets/images/product/1.png'),
              price: 12290
            },
            {
              title: 'Vortex Tab 75',
              slug: 'vortex-tab-75',
              count: 1,
              image: require('@/assets/images/product/1.png'),
              price: 12290
            }
          ]
        }
      ],
      userData: {
        login: 'DIKANI',
        name: 'Daniil',
        surname: 'Rybakov',
        tel: '+7 (999) 999 99 99',
        address: 'Some address'
      }
    }
  },
  head () {
    return {
      title: 'ERR-MECH | Профиль'
    }
  }
}
</script>
<style lang="scss" scoped>
.profile {
  padding: 50px 0 70px;
  h1 {
    text-align: left;
  }
  h2 {
    margin: 10px 0 30px;
  }
  h3 {
    margin-bottom: 20px;
  }
  &-box {
    border-radius: 5px;
    border: 1px solid $border;
    padding: 50px;
    width: 1170px;
    max-width: 100%;
  }
  &-data {
    padding-bottom: 30px;
    border-bottom: 1px solid $border;
    &__flex {
      width: 650px;
      max-width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      .input-wrapper {
        width: calc((100% - 50px) / 2);
        margin-bottom: 20px;
        &._textarea {
          width: 100%;
          margin-bottom: 0;
        }
      }
    }
  }
  &__textarea {
    resize: none;
  }
}

@media screen and (max-width: 560px) {
  .profile {
    &-box {
      padding: 20px;
    }
  }
}

@media screen and (max-width: 490px) {
  .profile {
    &-data {
      &__flex {
        display: block;
        width: 100%;
        .input-wrapper {
          width: 100%;
        }
      }
    }
  }
}
</style>
