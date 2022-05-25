<template>
  <section class="article">
    <div class="container">
      <h2>{{ article.title }}</h2>
      <div class="article__date">
        {{ article.date }}
      </div>
      <p class="article__desc">
        {{ article.descShort }}
      </p>
      <p class="article__content">
        {{ article.desc_full }}
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ArticleDetail',
  data () {
    return {
      article: {
        title: 'Механическая клавиатура или мембранная?',
        descShort: 'Расскажем кратко про основные отличия механической конструкции от мембранной, чтобы вы поняли, о чем идет речь.',
        desc_full: 'Расскажем кратко про основные отличия механической конструкции от мембранной, чтобы вы поняли, о чем идет речь.Расскажем кратко про основные отличия механической конструкции от мембранной, чтобы вы поняли, о чем идет речь.Расскажем кратко про основные отличия механической конструкции от мембранной, чтобы вы поняли, о чем идет речь.',
        date: '09 June 05:22'
      }
    }
  },
  head () {
    return {
      title: `ERR-MECH | ${this.article.title || 'Статья'}`
    }
  },
  computed: {
    slug () {
      return this.$route.params.slug
    }
  }
}
</script>
<style lang="scss" scoped>
.article {
  padding: 50px 0;
  &__desc {
    font-size: 18px;
    line-height: 1.6;
    margin: 20px 0;
    font-style: italic;
  }
  &__content {
    font-size: 18px;
    line-height: 1.6;
  }
  &__date {
    color: #aaa;
    font-size: 16px;
    font-weight: 500;
    margin-top: 15px;
  }
}
</style>
