<template>
  <a
    :href="linkText()"
    class="button is-success"
  >LINEで送る</a>
</template>

<script>
export default {
  props: {
    passCode: String
  },
  methods: {
    linkText() {
      const base = 'http://line.me/R/msg/text/'
      const mySite = `${window.location.protocol}//${window.location.host}`
      const share = `${mySite}/#/find/${this.passCode}/map`
      return `${base}?${share}`
    }
  }
}
</script>