<template>
  <section class="section">
    <div>
      <div>
        <google-map />
      </div>
      <div class="links">
        <nuxt-link to="./camera">
          <el-button>カメラで探す</el-button>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import GoogleMap from '~/components/GoogleMap.vue'

export default {
  components: {
    AppLogo,
    GoogleMap
  },
  mounted() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      // TODO
    }, () => {}
    ,{
			enableHighAccuracy: false,
			timeout : 5000
		});
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
