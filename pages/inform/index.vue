<template>
  <section class="container">
    <div>
      <app-logo/>
      <div>
        <el-button type="text" @click="visible = true">ご利用に関して</el-button>
        <el-dialog :visible.sync="visible" title="Hello world">
          <p>座標データの使われ方であったりの説明を記載</p>
        </el-dialog>
      </div>
      <div class="links">
        <nuxt-link to="/inform/complate">
          <el-button>教える</el-button>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  data() {
    return { visible: false } 
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
