<template>
  <section class="container">
    <div>
      <app-logo/>
      <p>コードを入れてね</p>
      <el-input v-model="input"></el-input>
      <div class="links">
        <el-radio-group v-model="radio">
          <el-radio-button label="1">Mapで探す</el-radio-button>
          <el-radio-button label="2">カメラで探す</el-radio-button>
        </el-radio-group>
      </div>
      <div class="links">
        <nuxt-link to="./find/1234/camera">
          <el-button>確定</el-button>
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
    return {
        input: '',
        radio: '1',
    } 
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
