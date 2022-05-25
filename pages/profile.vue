<template>
  <section class="profile">
    <div class="container">
      <h1>Профиль покупателя</h1>
      <div class="profile-box">
        <div class="profile-data">
          <h3>Ваши данные</h3>
          <div class="profile-data__flex">
            <AppInput
              v-for="(input, index) in userData.inputs"
              :key="index"
              v-model="input.value"
              :is-required="input.isRequired"
              :is-error="input.isError"
              :is-readonly="input.isReadonly"
              :label="input.label"
              :placeholder="input.placeholder"
              :input-type="input.inputType"
            />
            <div class="input-wrapper _textarea">
              <div class="input-label">
                Адрес
              </div>
              <textarea
                v-model="userData.address.value"
                rows="2"
                class="input profile__textarea"
                :placeholder="userData.address.placeholder || 'Ваш адрес доставки'"
              />
            </div>
            <ul
              v-if="errors.length"
              class="errorlist"
            >
              <li
                v-for="(error, index) in errors"
                :key="index"
              >
                {{ error }}
              </li>
            </ul>
            <div class="btn profile__btn">
              Сохранить новые данные
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
        address: {
          value: '',
          placeholder: 'Some address'
        },
        inputs: {
          login: {
            value: '',
            placeholder: 'DIKANI',
            label: 'Логин',
            isError: false,
            isReadonly: true
          },
          name: {
            value: '',
            placeholder: 'Daniil',
            label: 'Имя',
            isError: false
          },
          surname: {
            value: '',
            placeholder: 'Rybakov',
            label: 'Фамилия',
            isError: false
          },
          tel: {
            value: '',
            placeholder: '+7 (999) 999 99 99',
            label: 'Телефон',
            isError: false,
            inputType: 'tel'
          }
        }
      },
      errors: []
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
    margin-bottom: 30px;
  }
  h3 {
    margin-bottom: 20px;
  }
  &__btn {
    margin-top: 30px;
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
