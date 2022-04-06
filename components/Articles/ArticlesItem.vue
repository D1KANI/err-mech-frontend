<template>
  <nuxt-link :to="`/articles/${slug}`" class="articles-item">
    <div class="articles-item__head">
      {{ title }}
    </div>
    <div class="articles-item__body">
      {{ descShort }}
    </div>
    <div class="articles-item__link">
      ЧИТАТЬ →
    </div>
  </nuxt-link>
</template>
<script>
export default {
  name: 'ArticlesItem',
  props: {
    title: {
      type: String,
      required: true
    },
    descShort: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.articles {
  &-item {
    display: block;
    margin: 0 20px 40px;
    width: calc((100% - 160px) / 4);
    padding: 30px;
    background: #FCFCFC;
    border: 1px solid #E9EEF8;
    &__head {
      display: block;
      height: 72px;
      margin-bottom: 15px;
      color: $text;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      text-overflow: ellipsis;
      overflow: hidden;
      line-clamp: 3;
      display: flex;
      word-wrap: break-word;
      box-orient: vertical;
      transition: color 175ms ease-out;
      &:hover {
        color: $blue;
      }
    }
    &__body {
      display: block;
      height: 57px;
      margin-bottom: 20px;
      font-size: 16px;
      line-height: 19px;
      color: $text;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    &__link {
      display: block;
      width: max-content;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: $blue;
      position: relative;
      padding-bottom: 3px;
      &:before {
        content: "";
        display: block;
        width: 0%;
        height: 2px;
        border-radius: 1px;
        background-color: $blue;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: width 175ms ease-out;
      }
      &:hover {
        &:before {
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 1420px) {
  .articles {
    &-item {
      width: calc((100% - 120px) / 3);
    }
  }
}

@media screen and (max-width: 1020px) {
  .articles {
    &__flex {
      margin-right: -10px;
      margin-left: -10px;
    }
    &-item {
      margin-right: 10px;
      margin-left: 10px;
      width: calc((100% - 40px) / 2);
    }
  }
}

@media screen and (max-width: 620px) {
  .articles {
    &-item {
      width: 100%;
      margin-bottom: 20px;
      &__head {
        height: auto;
      }
      &__body {
        text-overflow: none;
        overflow: auto;
        line-clamp: none;
        display: block;
        word-wrap: none;
        -webkit-box-orient: none;
        box-orient: none;
        height: auto;
      }
    }
  }
}
</style>
