<template>
  <Layout>
    <hero-slider />
  </Layout>
</template>

<script>
import HeroSlider from '~/components/HeroSlider.vue'
export default {
  components: {
    HeroSlider
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>