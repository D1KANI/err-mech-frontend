<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__links">
        <AppLogo class="footer__logo" />
        <AppNav />
      </div>
      <div class="footer__flex">
        <div class="footer__box">
          <div class="footer__wrapper">
            <div class="banks">
              <svg width="58" height="40" viewBox="0 0 58 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6076 27.0974H14.0939L11.4591 16.9876C11.334 16.5226 11.0685 16.1115 10.6779 15.9177C9.7031 15.4307 8.62895 15.0432 7.45715 14.8477V14.4585H13.1174C13.8986 14.4585 14.4845 15.0432 14.5822 15.7222L15.9493 23.0148L19.4612 14.4585H22.8772L17.6076 27.0974ZM24.8302 27.0974H21.5119L24.2443 14.4585H27.5627L24.8302 27.0974ZM31.8559 17.9598C31.9535 17.2791 32.5394 16.8899 33.223 16.8899C34.2971 16.7922 35.4672 16.9876 36.4437 17.4729L37.0296 14.7517C36.0531 14.3624 34.9789 14.167 34.0042 14.167C30.7834 14.167 28.4398 15.9177 28.4398 18.3474C28.4398 20.1958 30.0999 21.1663 31.2717 21.751C32.5394 22.334 33.0277 22.7232 32.93 23.3062C32.93 24.1807 31.9535 24.57 30.9787 24.57C29.8069 24.57 28.6351 24.2785 27.5627 23.7915L26.9768 26.5144C28.1486 26.9997 29.4163 27.1951 30.5881 27.1951C34.1995 27.2912 36.4437 25.5422 36.4437 22.917C36.4437 19.6111 31.8559 19.4173 31.8559 17.9598ZM48.0572 27.0974L45.4223 14.4585H42.5922C42.0063 14.4585 41.4204 14.8477 41.2251 15.4307L36.346 27.0974H39.7621L40.4439 25.2507H44.6411L45.0317 27.0974H48.0572ZM43.0804 17.8621L44.0552 22.6255H41.3228L43.0804 17.8621Z" fill="#172B85" />
              </svg>
              <svg width="58" height="40" viewBox="0 0 58 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.3271 28.9686C27.3525 30.6824 24.7911 31.717 21.9922 31.717C15.747 31.717 10.6843 26.566 10.6843 20.212C10.6843 13.858 15.747 8.70703 21.9922 8.70703C24.7911 8.70703 27.3525 9.74162 29.3271 11.4554C31.3017 9.74162 33.8631 8.70703 36.662 8.70703C42.9072 8.70703 47.97 13.858 47.97 20.212C47.97 26.566 42.9072 31.717 36.662 31.717C33.8631 31.717 31.3017 30.6824 29.3271 28.9686Z" fill="#ED0006" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.3271 28.9686C31.7585 26.8584 33.3002 23.7184 33.3002 20.212C33.3002 16.7056 31.7585 13.5656 29.3271 11.4554C31.3018 9.74162 33.8631 8.70703 36.662 8.70703C42.9073 8.70703 47.97 13.858 47.97 20.212C47.97 26.566 42.9073 31.717 36.662 31.717C33.8631 31.717 31.3018 30.6824 29.3271 28.9686Z" fill="#F9A000" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.3271 11.4551C31.7585 13.5653 33.3002 16.7053 33.3002 20.2116C33.3002 23.718 31.7585 26.858 29.3271 28.9682C26.8958 26.858 25.3541 23.718 25.3541 20.2116C25.3541 16.7053 26.8958 13.5653 29.3271 11.4551Z" fill="#FF5E00" />
              </svg>
              <svg width="58" height="40" viewBox="0 0 58 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.6 17.9655C40.4804 17.2438 39.8227 16.7627 38.9257 16.7627C38.6267 16.7627 38.3875 16.7627 38.0885 16.7627C37.5504 16.7025 37.4308 16.883 37.4308 17.304C37.4308 19.4089 37.4308 21.4537 37.4308 23.5586C37.4308 24.6412 36.3544 25.7839 35.0987 26.0244C31.152 26.9266 27.2054 27.7685 23.2587 28.6706C22.8402 28.7909 22.3618 28.7909 21.8834 28.7909C21.704 28.7909 21.405 28.6706 21.3452 28.4902C21.2854 28.3699 21.4648 28.1294 21.5844 28.0091C21.7638 27.8888 22.003 27.7685 22.2422 27.6482C22.9598 27.4077 23.7371 27.1671 24.4547 26.9266C27.3848 25.9643 30.3149 25.002 33.2449 23.9796C34.5605 23.5586 35.2781 22.6565 35.2781 21.5138C35.3379 17.9054 35.2781 14.2368 35.2781 10.6283C35.2781 10.0269 34.9791 9.54575 34.3213 9.30518C33.5439 9.00448 32.8263 9.24504 32.1686 9.54574C27.9827 11.5304 23.8567 13.5151 19.6709 15.4997C18.4749 16.1011 17.7574 16.9431 17.7574 18.1459C17.7574 21.574 17.7574 25.002 17.7574 28.4301C17.7574 28.6105 17.7574 28.7909 17.8172 28.9112C18.2358 30.0539 19.3121 30.7756 20.7473 30.7756C23.6773 30.7756 26.6074 30.7756 29.5375 30.7756C32.4676 30.7756 35.3379 30.7756 38.2679 30.7756C38.9257 30.7756 39.4639 30.6553 39.9423 30.2343C40.5402 29.7532 40.5402 29.0916 40.5402 28.4902C40.5402 25.5314 40.6 17.9655 40.6 17.9655ZM28.4013 16.883C28.7003 16.1011 29.3581 15.62 30.3149 15.4997C30.9726 15.4396 31.5108 15.8004 31.6304 16.4018C31.75 17.304 30.6736 18.3865 29.5375 18.3865C28.6405 18.3865 28.1023 17.725 28.4013 16.883Z" fill="#FD6727" />
              </svg>
            </div>
            <div class="social">
              <a href="https://vk.com/errmech" target="_blank" class="social__link">
                <IconVK class="social__image" />
                <p>ВКонтакте</p>
              </a>
              <a href="" class="social__link">
                <IconInstagram class="social__image" />
                <p>Инстаграм</p>
              </a>
            </div>
          </div>
          <div class="footer__copyright">
            © Все права беззащитны. Надеемся только на вашу совесть
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterBlock'
}
</script>
<style lang="scss" scoped>

.footer {
  border-top: 1px solid #E7E8E9;
  background-color: #fff;
  &__links {
    display: flex;
    align-items: center;
    padding: 50px 0;
    border-bottom: 1px solid #E7E8E9;
    .nav {
      display: flex;
      align-items: center;
      &__link {
        text-transform: uppercase;
        color: $text;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 1.2px;
        margin-right: 40px;
        transition: color 150ms ease-out;
        &:hover {
          color: $blue;
        }
      }
    }
  }
  &__logo {
    padding: 0px 18px;
    margin-right: 50px;
  }
  &__flex {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 25px 0 50px;
  }
  &__wrapper {
    display: flex;
    .banks {
      border-right: 1px solid #E7E8E9;
    }
    .social {
      display: flex;
      &__link {
        display: flex;
        align-items: center;
        margin-left: 20px;
        p {
          color: $blue;
          margin-left: 10px;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
        }
      }
    }
  }
  &__copyright {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #898E92;
    margin-top: 20px;
  }
}

@media screen and (max-width: 1000px) {
  .footer {
    &__links {
      flex-direction: column;
      align-items: center;
      padding-bottom: 20px;
      .nav {
        flex-wrap: wrap;
        justify-content: center;
        &__link {
          margin: 0 15px;
          margin-bottom: 30px;
        }
      }
    }
    &__logo {
      margin-bottom: 50px;
      margin-right: 0;
    }
  }
}

@media screen and (max-width: 700px) {
  .footer {
    &__flex {
      display: block;
    }
    &__wrapper {
      justify-content: center;
    }
    &__copyright {
      text-align: center;
    }
  }
  .theme {
    justify-content: center;
    margin-top: 30px;
  }
}

@media screen and (max-width: 480px) {
  .footer {
    &__wrapper {
      flex-direction: column;
      align-items: center;
      .banks {
        border: none;
      }
      .social {
        order: -1;
        margin-bottom: 20px;
        &__link {
          margin: 0 10px;
        }
      }
    }
  }
}

</style>
